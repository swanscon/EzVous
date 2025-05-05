package com.cswanson.datepickerspring.entity;

import jakarta.persistence.*;

import java.time.LocalDate;

@Entity
public class DatePickerDate {
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private int id;
    private LocalDate date;
    @ManyToOne
    @JoinColumn(name = "datePicker_id")
    private DatePicker datePicker;
    private int count = 1;

    public DatePickerDate() {
    }

    public DatePickerDate(LocalDate date, DatePicker datePicker, int count) {
        this.date = date;
        this.datePicker = datePicker;
        this.count = count;
    }

    public int getId() {
        return id;
    }

    public void setId(int id) {
        this.id = id;
    }

    public LocalDate getDate() {
        return date;
    }

    public void setDate(LocalDate date) {
        this.date = date;
    }

    public DatePicker getDatePicker() {
        return datePicker;
    }

    public void setDatePicker(DatePicker datePicker) {
        this.datePicker = datePicker;
    }

    public int getCount() {
        return count;
    }

    public void setCount(int count) {
        this.count = count;
    }
}
