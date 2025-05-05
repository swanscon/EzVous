package com.cswanson.datepickerspring.repository;

import com.cswanson.datepickerspring.entity.DatePicker;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

@Repository
public interface DatePickerRepo extends JpaRepository<DatePicker, Integer> {

    DatePicker findById(String id);
    void deleteById(String id);

}
