package com.cswanson.datepickerspring.utils;

import java.util.Random;

public class IdGenerator {

    public static String generateId() {
        String chars = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz";
        StringBuilder id = new StringBuilder();
        Random rand = new Random();

        for (int i = 0; i < 6; i++) {
            id.append(chars.charAt(rand.nextInt(chars.length())));
        }

        return id.toString();
    }
}
