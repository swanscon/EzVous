package com.cswanson.datepickerspring.dto;

import java.util.List;

public class VoteRequest {
    private List<Integer> selectedDateIds;

    public List<Integer> getSelectedDateIds() {
        return selectedDateIds;
    }

    public void setSelectedDateIds(List<Integer> selectedDateIds) {
        this.selectedDateIds = selectedDateIds;
    }
}
