package com.cswanson.datepickerspring.service;

import com.cswanson.datepickerspring.entity.DatePicker;
import com.cswanson.datepickerspring.entity.DatePickerDate;
import com.cswanson.datepickerspring.repository.DatePickerDateRepo;
import jakarta.persistence.EntityNotFoundException;
import org.springframework.stereotype.Service;

import java.time.LocalDate;

@Service
public class DatePickerDateService {

    private final DatePickerDateRepo datePickerDateRepo;

    public DatePickerDateService(DatePickerDateRepo datePickerDateRepo) {
        this.datePickerDateRepo = datePickerDateRepo;
    }

    public void createDatePickerDate(DatePicker datePicker, LocalDate localDate) {
        DatePickerDate datePickerDate = new DatePickerDate();
        datePickerDate.setDatePicker(datePicker);
        datePickerDate.setDate(localDate);
        datePickerDateRepo.save(datePickerDate);
    }

    public DatePickerDate getDatePickerDate(Integer id) {
        return datePickerDateRepo.findById(id).orElseThrow(EntityNotFoundException::new);
    }

    public void updateDatePickerDateCount(Integer id) {
        DatePickerDate datePickerDate = getDatePickerDate(id);
        datePickerDate.setCount(datePickerDate.getCount() + 1);
        datePickerDateRepo.save(datePickerDate);
    }

    public void deleteDatePickerDate(Integer id) {
        datePickerDateRepo.deleteById(id);
    }
}
