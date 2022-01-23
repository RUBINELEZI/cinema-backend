CREATE TABLE KINEMA (
    KINEMA_ID INT PRIMARY KEY NOT NULL,
    EMRI_I_KINEMASE CHAR(50) NOT NULL,
    NR_I_RRUGES INT NOT NULL,
    QYTETI CHAR(50) NOT NULL,
    SHTETI CHAR(50) NOT NULL,
    WEBSITE CHAR(50) NOT NULL
);

CREATE TABLE DEPO(
    DEPO_ID INT PRIMARY KEY NOT NULL,
    EMRI_I_DEPOS CHAR(50) UNIQUE,
    KAPACITETI_I_DEPOS INT NOT NULL,
    ID_KINEMASE INT NOT NULL,
    FOREIGN KEY(ID_KINEMASE) REFERENCES KINEMA(KINEMA_ID)
);

CREATE TABLE USHQIM(
    USHQIM_ID INT PRIMARY KEY NOT NULL,
    EMRI_I_USHQIMIT CHAR(50) NOT NULL,
    CMIMI_I_USHQIMIT INT NOT NULL,
    ID_DEPOS INT NOT NULL,
    FOREIGN KEY(ID_DEPOS) REFERENCES DEPO(DEPO_ID)
);

CREATE TABLE SALLE(
    SALLE_ID INT PRIMARY KEY NOT NULL,
    NUMRI_I_VENDEVE INT NOT NULL,
    NUMRI_I_SALLES INT UNIQUE NOT NULL,
    ID_KINEMASE INT NOT NULL,
    FOREIGN KEY(ID_KINEMASE) REFERENCES KINEMA(KINEMA_ID)
);

CREATE TABLE STAFI(
    STAFI_ID INT PRIMARY KEY NOT NULL,
    EMRI CHAR(50) NOT NULL,
    MBIEMRI CHAR(50) NOT NULL,
    PROFESIONI CHAR(50) NOT NULL,
    PAGA INT NOT NULL,
    ID_KINEMASE INT NOT NULL,
    FOREIGN KEY(ID_KINEMASE) REFERENCES KINEMA(KINEMA_ID),
    MENAXHER_ID INT,
    FOREIGN KEY(MENAXHER_ID) REFERENCES STAFI(STAFI_ID)
);

CREATE TABLE FILM(
    FILM_ID INT PRIMARY KEY NOT NULL,
    TITULLI CHAR(50) NOT NULL,
    ZHANER CHAR(50) NOT NULL,
    DIMENSIONI CHAR(50) NOT NULL,
    KOHEZGJATJA CHAR(50) NOT NULL,
    MOSHA_LEJUAR CHAR(50) NOT NULL
);

CREATE TABLE BILETE(
    BILETE_ID INT PRIMARY KEY NOT NULL,
    CMIMI_I_BILETES INT NOT NULL,
    FILM_ID INT NOT NULL,
    FOREIGN KEY(FILM_ID) REFERENCES FILM(FILM_ID)
);

CREATE TABLE KUPON(
    KUPON_ID INT PRIMARY KEY NOT NULL,
    KODI CHAR(50) UNIQUE NOT NULL,
    BILETE_ID INT NOT NULL,
    FOREIGN KEY(BILETE_ID) REFERENCES BILETE(BILETE_ID)
);

CREATE TABLE NDENJESE(
    NDENJESE_ID INT PRIMARY KEY NOT NULL,
    NDENJESE_NR INT NOT NULL,
    RRESHTI_I_NDENJESES INT NOT NULL,
    SALLE_ID INT NOT NULL,
    FOREIGN KEY(SALLE_ID) REFERENCES SALLE(SALLE_ID),
    BILETE_ID INT UNIQUE NOT NULL,
    FOREIGN KEY(BILETE_ID) REFERENCES BILETE(BILETE_ID)
);

CREATE TABLE SHFAQJE(
    SHFAQJE_ID INT PRIMARY KEY NOT NULL,
    DATA_SHFAQJES DATE NOT NULL,
    KOHA CHAR(50) NOT NULL,
    SALLE_ID INT NOT NULL,
    FOREIGN KEY(SALLE_ID) REFERENCES SALLE(SALLE_ID),
    FILM_ID INT NOT NULL,
    FOREIGN KEY(FILM_ID) REFERENCES FILM(FILM_ID)
);

CREATE TABLE KLIENT(
    KLIENT_ID INT PRIMARY KEY NOT NULL,
    EMRI CHAR(50) NOT NULL,
    MBIEMRI CHAR(50) NOT NULL,
    DATA_E_LINDJES CHAR(50) NOT NULL
);
CREATE TABLE REZERVIM(
    REZERVIM_ID INT PRIMARY KEY NOT NULL,
    DATA_REZERVIMIT DATE NOT NULL,
    STATUSI CHAR(50) NOT NULL,
    BILETE_ID INT UNIQUE NOT NULL,
    FOREIGN KEY(BILETE_ID) REFERENCES BILETE(BILETE_ID),
    KLIENT_ID INT NOT NULL,
    FOREIGN KEY(KLIENT_ID) REFERENCES KLIENT(KLIENT_ID)
);
