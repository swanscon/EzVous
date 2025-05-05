package com.cswanson.datepickerspring.service;

import com.cswanson.datepickerspring.entity.DatePicker;
import com.cswanson.datepickerspring.entity.DatePickerDate;
import com.cswanson.datepickerspring.repository.DatePickerRepo;
import org.springframework.stereotype.Service;

import java.util.List;

@Service
public class DatePickerService {

    private final DatePickerRepo datePickerRepo;

    public DatePickerService(DatePickerRepo datePickerRepo) {
        this.datePickerRepo = datePickerRepo;
    }

    public void createDatePicker(String title, Integer count) {
        DatePicker datePicker = new DatePicker();
        datePicker.setTitle(title);
        datePicker.setCount(count);
        datePickerRepo.save(datePicker);
    }

    public DatePicker getDatePicker(String id) {
        return datePickerRepo.findById(id);
    }

    public List<DatePicker> getDatePickers() {
        return datePickerRepo.findAll();
    }

    public void updateDatePickerDates(String id, List<DatePickerDate> datePickerDates) {
        DatePicker datePicker = datePickerRepo.findById(id);
        datePicker.setDates(datePickerDates);
        datePickerRepo.save(datePicker);
    }

    public void deleteDatePicker(String id) {
        datePickerRepo.deleteById(id);
    }
}
