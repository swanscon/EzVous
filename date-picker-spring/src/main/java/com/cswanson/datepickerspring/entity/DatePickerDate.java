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
    private DatePicker datePicker;
    private int count;


}
