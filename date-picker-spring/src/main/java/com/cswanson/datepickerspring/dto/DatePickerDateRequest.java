package com.cswanson.datepickerspring.dto;

import java.time.LocalDate;

public class DatePickerDateRequest {
    private LocalDate date;

    public LocalDate getDate() {
        return date;
    }

    public void setDate(LocalDate date) {
        this.date = date;
    }
}
