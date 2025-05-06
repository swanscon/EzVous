package com.cswanson.datepickerspring.dto;

import java.util.List;

public class DatePickerRequest {
    private String title;
    private int inviteCount;
    private List<DatePickerDateRequest> dates;

    public String getTitle() {
        return title;
    }

    public void setTitle(String title) {
        this.title = title;
    }

    public int getInviteCount() {
        return inviteCount;
    }

    public void setInviteCount(int inviteCount) {
        this.inviteCount = inviteCount;
    }

    public List<DatePickerDateRequest> getDates() {
        return dates;
    }

    public void setDates(List<DatePickerDateRequest> dates) {
        this.dates = dates;
    }
}
