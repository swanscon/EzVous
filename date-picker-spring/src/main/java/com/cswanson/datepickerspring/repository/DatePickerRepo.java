package com.cswanson.datepickerspring.repository;

import com.cswanson.datepickerspring.entity.DatePicker;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

import java.util.Optional;

@Repository
public interface DatePickerRepo extends JpaRepository<DatePicker, Integer> {

    Optional<DatePicker> findById(String id);
    boolean existsById(String id);
    void deleteById(String id);
}
