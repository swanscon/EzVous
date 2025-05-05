package com.cswanson.datepickerspring.entity;

import com.cswanson.datepickerspring.utils.IdGenerator;
import jakarta.persistence.Entity;
import jakarta.persistence.Id;
import jakarta.persistence.OneToMany;
import jakarta.persistence.PrePersist;

import java.util.List;

@Entity
public class DatePicker {
    @Id
    private String id;
    private String title;
    @OneToMany
    private List<DatePickerDate> dates;
    private int count;

    @PrePersist
    public void assignId() {
        if (this.id == null) {
            this.id = IdGenerator.generateId();
        }
    }

    public DatePicker() {}

    public DatePicker(String id, String title, List<DatePickerDate> dates, int count) {
        this.id = id;
        this.title = title;
        this.dates = dates;
        this.count = count;
    }

    public DatePicker(String title, List<DatePickerDate> dates, int count) {
        this.title = title;
        this.dates = dates;
        this.count = count;
    }

    public String getId() {
        return id;
    }

    public String getTitle() {
        return title;
    }

    public List<DatePickerDate> getDates() {
        return dates;
    }

    public int getCount() {
        return count;
    }

    public void setId(String id) {
        this.id = id;
    }

    public void setTitle(String title) {
        this.title = title;
    }

    public void setDates(List<DatePickerDate> dates) {
        this.dates = dates;
    }

    public void setCount(int count) {
        this.count = count;
    }
}
