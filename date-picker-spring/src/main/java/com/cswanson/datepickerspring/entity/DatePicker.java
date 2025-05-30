package com.cswanson.datepickerspring.entity;

import com.cswanson.datepickerspring.utils.IdGenerator;
import jakarta.persistence.*;

import java.util.ArrayList;
import java.util.List;

@Entity
public class DatePicker {
    @Id
    @Column(unique=true)
    private String id;
    private String title;
    private String description = null;
    @OneToMany(mappedBy="datePicker", cascade=CascadeType.ALL, fetch=FetchType.EAGER, orphanRemoval=true)
    private List<DatePickerDate> dates = new ArrayList<>();
    private int inviteCount;
    private int submissionCount = 0;
    private String email = null;

    @PrePersist
    public void assignId() {
        if (this.id == null) {
            this.id = IdGenerator.generateId();
        }
    }

    public DatePicker() {}

    public DatePicker(String id, String title, List<DatePickerDate> dates, int inviteCount) {
        this.id = id;
        this.title = title;
        this.dates = dates;
        this.inviteCount = inviteCount;
    }

    public DatePicker(String title, int inviteCount) {
        this.title = title;
        this.inviteCount = inviteCount;
    }

    public String getId() {
        return id;
    }

    public String getTitle() {
        return title;
    }

    public String getDescription() {
        return description;
    }

    public List<DatePickerDate> getDates() {
        return dates;
    }

    public int getInviteCount() {
        return inviteCount;
    }

    public int getSubmissionCount() {
        return submissionCount;
    }

    public String getEmail() {
        return email;
    }

    public void setId(String id) {
        this.id = id;
    }

    public void setTitle(String title) {
        this.title = title;
    }

    public void setDescription(String description) {
        this.description = description;
    }

    public void setDates(List<DatePickerDate> dates) {
        if (dates == null) return;
        for (DatePickerDate date : dates) {
            date.setDatePicker(this);
        }
        this.dates = dates;
    }

    public void setInviteCount(int count) {
        this.inviteCount = count;
    }

    public void setSubmissionCount(int submissionCount) {
        this.submissionCount = submissionCount;
    }

    public void setEmail(String email) {
        this.email = email;
    }

    public void addDate(DatePickerDate date) {
        date.setDatePicker(this);
        this.dates.add(date);
    }

    public void addDates(List<DatePickerDate> dates) {
        for(DatePickerDate date : dates) {
            addDate(date);
        }
    }
}
