package com.cswanson.datepickerspring.service;

import com.cswanson.datepickerspring.entity.DatePicker;
import com.cswanson.datepickerspring.entity.DatePickerDate;
import com.cswanson.datepickerspring.repository.DatePickerRepo;
import com.mailjet.client.MailjetClient;
import jakarta.transaction.Transactional;
import org.springframework.stereotype.Service;

import java.util.List;
import java.util.Optional;

@Service
public class DatePickerService {

    private final DatePickerRepo datePickerRepo;
    private final MailjetEmailService mailjetEmailService;

    public DatePickerService(DatePickerRepo datePickerRepo, MailjetEmailService mailjetEmailService) {
        this.datePickerRepo = datePickerRepo;
        this.mailjetEmailService = mailjetEmailService;
    }

    public DatePicker createDatePicker(String title, Optional<String> description, Integer voteCount, List<DatePickerDate> dates) {
        DatePicker datePicker = new DatePicker();
        datePicker.setTitle(title);
        datePicker.setDescription(description.orElse(""));
        datePicker.setInviteCount(voteCount);
        for(DatePickerDate date : dates) {
            datePicker.addDate(date);
        }
        return datePickerRepo.save(datePicker);
    }

    public DatePicker getDatePicker(String id) {
        return datePickerRepo.findById(id).orElseThrow(() -> new IllegalArgumentException("No such datepicker: " + id));
    }

    public List<DatePicker> getDatePickers() {
        return datePickerRepo.findAll();
    }

    public void updateSubmissionCount(String id) {
        DatePicker datePicker = getDatePicker(id);
        if (datePicker.getSubmissionCount() >= datePicker.getInviteCount()) {
            throw new IllegalStateException("Maximum submissions already reached.");
        }
        datePicker.setSubmissionCount(datePicker.getSubmissionCount() + 1);
        datePickerRepo.save(datePicker);
        if(datePicker.getSubmissionCount() == datePicker.getInviteCount() && datePicker.getEmail() != null) {
            String subject = "All responses are in for: " + datePicker.getTitle();
            String html = "<h3>All submissions have been received for your rendezvous: <strong>"
                    + datePicker.getTitle()
                    + "</strong>.</h3><p>You may now check the results at your convenience.</p>";
            mailjetEmailService.sendEmail(datePicker.getEmail(), subject, html);
        } else if(datePicker.getSubmissionCount() == datePicker.getInviteCount()) {
            System.out.println("Maximum submission count reached: " + datePicker.getInviteCount());
        }
    }

    public void updateEmail(String id, String email) {
        DatePicker datePicker = getDatePicker(id);
        datePicker.setEmail(email);
        datePickerRepo.save(datePicker);
        System.out.println("Notification will be sent to: " + datePicker.getEmail());
    }

    @Transactional
    public void deleteDatePicker(String id) {
        if (!datePickerRepo.existsById(id)) {
            throw new IllegalArgumentException("Cannot delete. No DatePicker with ID: " + id);
        }
        datePickerRepo.deleteById(id);
    }
}
