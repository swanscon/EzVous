package com.cswanson.datepickerspring.entity;

import com.fasterxml.jackson.annotation.JsonIgnore;
import jakarta.persistence.*;

import java.time.LocalDate;

@Entity
public class DatePickerDate {
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private int id;
    private LocalDate date;
    @JsonIgnore
    @ManyToOne
    @JoinColumn(name = "date_picker_id")
    private DatePicker datePicker;
    private int voteCount = 0;

    public DatePickerDate() {
    }

    public DatePickerDate(LocalDate date, DatePicker datePicker) {
        this.date = date;
        this.datePicker = datePicker;
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

    public int getVoteCount() {
        return voteCount;
    }

    public void setVoteCount(int voteCount) {
        this.voteCount = voteCount;
    }
}
