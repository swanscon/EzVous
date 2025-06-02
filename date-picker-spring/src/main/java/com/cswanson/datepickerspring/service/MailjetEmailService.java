package com.cswanson.datepickerspring.service;

import com.mailjet.client.ClientOptions;
import com.mailjet.client.MailjetClient;
import com.mailjet.client.transactional.SendContact;
import com.mailjet.client.transactional.SendEmailsRequest;
import com.mailjet.client.transactional.TrackOpens;
import com.mailjet.client.transactional.TransactionalEmail;
import com.mailjet.client.transactional.response.MessageResult;
import com.mailjet.client.transactional.response.SendEmailsResponse;
import org.springframework.beans.factory.annotation.Value;
import org.springframework.stereotype.Service;

import java.util.Arrays;
import java.util.List;

@Service
public class MailjetEmailService {

    private final MailjetClient client;

    @Value("${mailjet.from.email}")
    private String fromEmail;

    @Value("${mailjet.from.name}")
    private String fromName;

    public MailjetEmailService(
            @Value("${mailjet.api.public}") String apiKey,
            @Value("${mailjet.api.secret}") String secretKey
    ) {
        this.client = new MailjetClient(ClientOptions.builder()
            .apiKey(apiKey)
            .apiSecretKey(secretKey)
            .build()
        );
    }

    public void sendEmail(String toEmail, String subject, String html) {
        try {
            TransactionalEmail message = TransactionalEmail.builder()
                    .to(new SendContact(toEmail))
                    .from(new SendContact(fromEmail, fromName))
                    .subject(subject)
                    .htmlPart(html)
                    .trackOpens(TrackOpens.ENABLED)
                    .build();

            SendEmailsRequest request = SendEmailsRequest
                    .builder()
                    .message(message)
                    .build();

            SendEmailsResponse response = request.sendWith(client);
            List<MessageResult> messages = Arrays.asList(response.getMessages());
            messages.forEach(msg -> {
                System.out.println("Email sent to: " + msg.getTo());
                System.out.println("Status: " + msg.getStatus());
            });
        } catch (Exception e) {
            System.err.println("Failed to send email: " + e.getMessage());
        }
    }
}
