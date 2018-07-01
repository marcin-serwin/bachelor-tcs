Protokoły warstwy aplikacji - charakterystyka, porównanie.

---

# Wstęp
Protokoły warstwy aplikacji należą do protokołów wysokiego poziomu. Definiują one, w jaki sposób procesy działające na odrębnych maszynach powinny komunikować się ze sobą, w celu osiągnięcia pożądanego rezultatu. Protokoły te określają rodzaj wymienianych wiadomości, syntaxę, semantykę oraz w jakich sytuacja powinny być wysyłane wiadomości.

# HTTP
Zobacz [HTTP](III.5.7 HTTP i jego bezstanowość.md). 

# FTP (File Transfer Protocol)
Protokół używany w celu transferu plików pomiędzy lokalną i zdalną maszyną. Domyślnie wykorzystuje port 21 (na serwerze) do autoryzacji i wydawania komend. Dane z kolei przesyłane są osobnym połączeniem TCP.

## Główne cechy:
  * tekstowy
  * jest stanowy, typu push/pull
  * zazwyczaj wymaga autoryzacji użytkownika (ale może też istnieć wersja z logowanie anonimowym)
  * typowe polecania to: **USER** username, **PASS** password, **LIST**, **RETR** filename, **STOR** filename
  * używa połączenia TCP

## Przykład sesji:
```
Connected to nordsieck.cs.colorado.edu.  
220 nordsieck FTP server (Version 5.53 Tue Aug 25 10:46:12 MDT 1992) ready.  
Name (nordsieck.cs.colorado.edu:yourlogin): yourlogin  
331 Password required for yourlogin.  
Password:  
230 User yourlogin logged in.  
ftp> cd HPSC/exercises  
250 CWD command successful.  
ftp> ls  
200 PORT command successful.  
550 No files found.  
ftp> put tmul.out  
200 PORT command successful.  
150 Opening ASCII mode data connection for tmul.out.  
226 Transfer complete.  
local: tmul.out remote: tmul.out  
1882 bytes sent in 0.0095 seconds (1.9e+02 Kbytes/s)  
ftp> ls  
200 PORT command successful.  
150 Opening ASCII mode data connection for file list.  
tmul.out  
226 Transfer complete.  
9 bytes received in 0.0021 seconds (4.3 Kbytes/s)  
ftp> mput *  
mput Makefile? y  
200 PORT command successful.  
150 Opening ASCII mode data connection for Makefile.  
226 Transfer complete.  
local: Makefile remote: Makefile  
1020 bytes sent in 0.0062 seconds (1.6e+02 Kbytes/s)  
mput tmul.out? n  
ftp> quit  
221 Goodbye.  
```

Podobnym protokołem jest **FTPS (FTP Secure)**, który dodatkowo zapewnia szyfrowanie danych.

# SMTP (Simple Mail Transfer Protocol)
Protokół używany podczas operacji wokół poczty elektronicznej. Zazwyczaj używany jedynie do wysyłania poczty, odbieranie jest realizowane za pomocą protokołów **POP3** i *IMAP**. Domyślnie wykorzystuje 25 port.

## Główne cechy:
  * tekstowy
  * jest stanowy, typu push (główne zastosowanie)
  * nie wymaga autoryzacji użytkownika
  * typowe polecania to: **HELO** `server.dot.com`, **MAIL FROM** `mail@from.com`, **RCPT TO** `mailt@to.com`, **DATA** dane zakończone kropką, **QUIT**
  * używa połączenia TCP

## Przykład sesji:
```
S: 220 smtp.example.com ESMTP Postfix
C: HELO relay.example.org 
S: 250 Hello relay.example.org, I am glad to meet you
C: MAIL FROM:<bob@example.org>
S: 250 Ok
C: RCPT TO:<alice@example.com>
S: 250 Ok
C: RCPT TO:<theboss@example.com>
S: 250 Ok
C: DATA
S: 354 End data with <CR><LF>.<CR><LF>
C: From: "Bob Example" <bob@example.org>
C: To: "Alice Example" <alice@example.com>
C: Cc: theboss@example.com
C: Date: Tue, 15 January 2008 16:02:43 -0500
C: Subject: Test message
C: 
C: Hello Alice.
C: This is a test message with 5 header fields and 4 lines in the message body.
C: Your friend,
C: Bob
C: .
S: 250 Ok: queued as 12345
C: QUIT
S: 221 Bye
{The server closes the connection}
```

Wersja szyfrowaną tego protokołu jest **SMTPS**.


# POP3 (Post Office Protocol - Version 3)
Protokół, który służy do odbierania wiadomości. Zazwyczaj działa na porcie 110. Składa się z dwóch faz: autoryzacji i transakcji.

## Główne cechy:
  * tekstowy
  * jest stanowy, typu pull
  * wymaga autoryzacji użytkownika
  * typowe polecania to: **USER** username, **PASS** password, **LIST**, **RETR** num, **DELE** num, **QUIT**
  * używa połączenia TCP

## Przykład sesji:
```
S: <wait for connection on TCP port 110>
C: <open connection>
S:    +OK POP3 server ready <1896.697170952@dbc.mtview.ca.us>
C:    APOP mrose c4c9334bac560ecc979e58001b3e22fb
S:    +OK mrose's maildrop has 2 messages (320 octets)
C:    STAT
S:    +OK 2 320
C:    LIST
S:    +OK 2 messages (320 octets)
S:    1 120
S:    2 200
S:    .
C:    RETR 1
S:    +OK 120 octets
S:    <the POP3 server sends message 1>
S:    .
C:    DELE 1
S:    +OK message 1 deleted
C:    RETR 2
S:    +OK 200 octets
S:    <the POP3 server sends message 2>
S:    .
C:    DELE 2
S:    +OK message 2 deleted
C:    QUIT
S:    +OK dewey POP3 server signing off (maildrop empty)
C: <close connection>
S: <wait for next connection>
```

Bardziej skomplikowanym protokołem, który ma znacznie więcej funkcjonalności, takie jak tworzenie hierarchii folderów dla wiadomości, jest **IMAP (Internet Message Transfer protocol)**. Z kolei wersją szyfrowną POP3 jest **STARTTLS**.

# SSH (Secure Shell)
Binarny protokół, który służy do zdalnego, szyfrowanego logowania się na inne maszyny w sieci, na których działa serwer SSH (i znamy login i hasło użytkownika). Pozwala na zdalne wykonywanie komend na serwerze, forwardowanie portów, tunelowanie połączeń, transfer danych. Zwykle działa na porcie 22.

# DNS (Domain Name Server)
Zobacz [DNS](III.5.5 DNS.md). 
