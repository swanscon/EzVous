package com.cswanson.datepickerspring.service;

import com.cswanson.datepickerspring.entity.DatePicker;
import com.cswanson.datepickerspring.entity.DatePickerDate;
import com.cswanson.datepickerspring.repository.DatePickerDateRepo;
import jakarta.persistence.EntityNotFoundException;
import org.springframework.stereotype.Service;

import java.time.LocalDate;
import java.util.List;

@Service
public class DatePickerDateService {

    private final DatePickerDateRepo datePickerDateRepo;

    public DatePickerDateService(DatePickerDateRepo datePickerDateRepo) {
        this.datePickerDateRepo = datePickerDateRepo;
    }

    public void createDatePickerDate(DatePicker datePicker, LocalDate localDate) {
        if (datePicker == null || localDate == null) {
            throw new IllegalArgumentException("DatePicker and date must not be null.");
        }
        DatePickerDate date = new DatePickerDate(localDate, datePicker);
        datePickerDateRepo.save(date);
    }

    public DatePickerDate getDatePickerDate(Integer id) {
        return datePickerDateRepo.findById(id).orElseThrow(() -> new IllegalArgumentException("Date not found: " + id));
    }

    public void updateVoteCount(List<Integer> dateIds) {
        List<DatePickerDate> dates = datePickerDateRepo.findAllById(dateIds);
        for (DatePickerDate date : dates) {
            date.setVoteCount(date.getVoteCount() + 1);
        }
        datePickerDateRepo.saveAll(dates);
    }

    public void deleteDatePickerDate(Integer id) {
        if(!datePickerDateRepo.existsById(id)) {
            throw new IllegalArgumentException("Date not found: " + id);
        }
        datePickerDateRepo.deleteById(id);
    }
}
