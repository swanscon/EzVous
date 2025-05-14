package com.cswanson.datepickerspring.service;

import com.cswanson.datepickerspring.entity.DatePicker;
import com.cswanson.datepickerspring.entity.DatePickerDate;
import com.cswanson.datepickerspring.repository.DatePickerRepo;
import jakarta.transaction.Transactional;
import org.springframework.stereotype.Service;

import java.util.List;

@Service
public class DatePickerService {

    private final DatePickerRepo datePickerRepo;

    public DatePickerService(DatePickerRepo datePickerRepo) {
        this.datePickerRepo = datePickerRepo;
    }

    public DatePicker createDatePicker(String title, Integer voteCount, List<DatePickerDate> dates) {
        DatePicker datePicker = new DatePicker();
        datePicker.setTitle(title);
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
        datePicker.setSubmissionCount(datePicker.getSubmissionCount() + 1);
        datePickerRepo.save(datePicker);
        if(datePicker.getSubmissionCount() == datePicker.getInviteCount()) {
            System.out.println("Sending notification.");
        }
    }

    @Transactional
    public void deleteDatePicker(String id) {
        if (!datePickerRepo.existsById(id)) {
            throw new IllegalArgumentException("Cannot delete. No DatePicker with ID: " + id);
        }
        datePickerRepo.deleteById(id);
    }
}
