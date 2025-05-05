package com.cswanson.datepickerspring.repository;

import com.cswanson.datepickerspring.entity.DatePickerDate;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

@Repository
public interface DatePickerDateRepo extends JpaRepository<DatePickerDate, Integer> {
}
