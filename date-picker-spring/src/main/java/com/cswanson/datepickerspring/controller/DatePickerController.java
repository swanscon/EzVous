package com.cswanson.datepickerspring.controller;

import com.cswanson.datepickerspring.dto.DatePickerDateRequest;
import com.cswanson.datepickerspring.dto.DatePickerRequest;
import com.cswanson.datepickerspring.dto.VoteRequest;
import com.cswanson.datepickerspring.entity.DatePicker;
import com.cswanson.datepickerspring.entity.DatePickerDate;
import com.cswanson.datepickerspring.service.DatePickerDateService;
import com.cswanson.datepickerspring.service.DatePickerService;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.util.List;
import java.util.stream.Collectors;

@RestController
@RequestMapping("/api/datepicker")
public class DatePickerController {

    private final DatePickerService datePickerService;
    private final DatePickerDateService datePickerDateService;

    public DatePickerController(DatePickerService datePickerService, DatePickerDateService datePickerDateService) {
        this.datePickerService = datePickerService;
        this.datePickerDateService = datePickerDateService;
    }

    @PostMapping("/")
    public ResponseEntity<DatePicker> createDatePicker(@RequestBody DatePickerRequest request) {
        DatePicker created = dtoToDatePicker(request);
        return new ResponseEntity<>(created, HttpStatus.CREATED);
    }

    @GetMapping("/{id}")
    public ResponseEntity<DatePicker> getDatePicker(@PathVariable String id) {
        DatePicker datePicker = datePickerService.getDatePicker(id);
        return new ResponseEntity<>(datePicker, HttpStatus.OK);
    }

    @GetMapping("/")
    public ResponseEntity<List<DatePicker>> getAllDatePickers() {
        List<DatePicker> datePickers = datePickerService.getDatePickers();
        return new ResponseEntity<>(datePickers, HttpStatus.OK);
    }

    @PutMapping("/{id}/vote")
    public ResponseEntity<Void> submitVote(@PathVariable String id, @RequestBody VoteRequest request) {
        datePickerDateService.updateVoteCount(request.getSelectedDateIds());
        datePickerService.updateSubmissionCount(id);
        return new ResponseEntity<>(HttpStatus.OK);
    }

    @PutMapping("/{id}")
    public ResponseEntity<Void> submitEmail(@PathVariable String id, @RequestParam(name = "email") String email) {
        datePickerService.updateEmail(id, email);
        return new ResponseEntity<>(HttpStatus.OK);
    }

    @DeleteMapping("/{id}")
    public ResponseEntity<Void> deleteDatePicker(@PathVariable String id) {
        datePickerService.deleteDatePicker(id);
        return new ResponseEntity<>(HttpStatus.OK);
    }

    private DatePicker dtoToDatePicker(DatePickerRequest request) {
        return datePickerService.createDatePicker(
                request.getTitle(),
                request.getInviteCount(),
                dtoToDatePickerDateList(request.getDates())
        );
    }

    private List<DatePickerDate> dtoToDatePickerDateList(List<DatePickerDateRequest> dateRequests) {
        return dateRequests.stream()
                .map(dto -> new DatePickerDate(dto.getDate(), null))
                .collect(Collectors.toList());
    }
}
