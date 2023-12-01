



CREATE TABLE "ПортфЦБ"
(

	"primaryKey" RAW(16) NOT NULL,

	"Номер" NUMBER(10) NULL,

	"Дата" DATE NULL,

	"Обязаности" NVARCHAR2(255) NULL,

	"Сумма" FLOAT(53) NULL,

	"ПодписьК" NUMBER(1) NULL,

	"ПодписьО" NUMBER(1) NULL,

	"Сотрудн" RAW(16) NOT NULL,

	"Организация" RAW(16) NOT NULL,

	"УпрОБъек" RAW(16) NOT NULL,

	"Клиен" RAW(16) NOT NULL,

	 PRIMARY KEY ("primaryKey")
) ;


CREATE TABLE "Организация"
(

	"primaryKey" RAW(16) NOT NULL,

	"Наим" NVARCHAR2(255) NULL,

	"РасСчет" NUMBER(10) NULL,

	"БИК" NUMBER(10) NULL,

	"Банк" NVARCHAR2(255) NULL,

	"ИНН" NUMBER(10) NULL,

	"КПП" NUMBER(10) NULL,

	 PRIMARY KEY ("primaryKey")
) ;


CREATE TABLE "Тч_Портф"
(

	"primaryKey" RAW(16) NOT NULL,

	"Номинал" FLOAT(53) NULL,

	"Колич" NUMBER(10) NULL,

	"Сумма" FLOAT(53) NULL,

	"ТипАкц" RAW(16) NOT NULL,

	 PRIMARY KEY ("primaryKey")
) ;


CREATE TABLE "Сотрудн"
(

	"primaryKey" RAW(16) NOT NULL,

	"ФИО" NVARCHAR2(255) NULL,

	"Должност" RAW(16) NOT NULL,

	 PRIMARY KEY ("primaryKey")
) ;


CREATE TABLE "РеестрАк"
(

	"primaryKey" RAW(16) NOT NULL,

	"Дата" DATE NULL,

	"Номер" NUMBER(10) NULL,

	"Подпись" NUMBER(1) NULL,

	"Клиен" RAW(16) NOT NULL,

	"Сотрудн" RAW(16) NOT NULL,

	"УпрОБъек" RAW(16) NOT NULL,

	 PRIMARY KEY ("primaryKey")
) ;


CREATE TABLE "ТЧ_выпл"
(

	"primaryKey" RAW(16) NOT NULL,

	"Сумма" FLOAT(53) NULL,

	 PRIMARY KEY ("primaryKey")
) ;


CREATE TABLE "Клиен"
(

	"primaryKey" RAW(16) NOT NULL,

	"Наим" NVARCHAR2(255) NULL,

	"РасСчет" NUMBER(10) NULL,

	"БИК" NUMBER(10) NULL,

	"Банк" NVARCHAR2(255) NULL,

	"ИНН" NUMBER(10) NULL,

	"КПП" NUMBER(10) NULL,

	 PRIMARY KEY ("primaryKey")
) ;


CREATE TABLE "Тч_реес"
(

	"primaryKey" RAW(16) NOT NULL,

	"Номинал" FLOAT(53) NULL,

	"Сумма" FLOAT(53) NULL,

	"ДоляУК" FLOAT(53) NULL,

	"Основание" NVARCHAR2(255) NULL,

	"ТипАкц" RAW(16) NOT NULL,

	 PRIMARY KEY ("primaryKey")
) ;


CREATE TABLE "ВыплатДоход"
(

	"primaryKey" RAW(16) NOT NULL,

	"Дата" DATE NULL,

	"Требования" NVARCHAR2(255) NULL,

	"Номер" NUMBER(10) NULL,

	"УпрОБъек" RAW(16) NOT NULL,

	"Сотрудн" RAW(16) NOT NULL,

	 PRIMARY KEY ("primaryKey")
) ;


CREATE TABLE "Должност"
(

	"primaryKey" RAW(16) NOT NULL,

	"Должность" NVARCHAR2(255) NULL,

	"Код" NUMBER(10) NULL,

	 PRIMARY KEY ("primaryKey")
) ;


CREATE TABLE "УпрОБъек"
(

	"primaryKey" RAW(16) NOT NULL,

	 PRIMARY KEY ("primaryKey")
) ;


CREATE TABLE "ИнвВзн"
(

	"primaryKey" RAW(16) NOT NULL,

	"Дата" DATE NULL,

	"Сумма" FLOAT(53) NULL,

	"Подпись" NUMBER(1) NULL,

	"Номер" NUMBER(10) NULL,

	"УпрОБъек" RAW(16) NOT NULL,

	"ДоговрИнв" RAW(16) NOT NULL,

	 PRIMARY KEY ("primaryKey")
) ;


CREATE TABLE "ТипАкц"
(

	"primaryKey" RAW(16) NOT NULL,

	"ТипАкции" NVARCHAR2(255) NULL,

	 PRIMARY KEY ("primaryKey")
) ;


CREATE TABLE "ДоговрИнв"
(

	"primaryKey" RAW(16) NOT NULL,

	"Требования" NVARCHAR2(255) NULL,

	"Дата" DATE NULL,

	"Номер" NUMBER(10) NULL,

	"ПредмДог" NVARCHAR2(255) NULL,

	"Обяз" NVARCHAR2(255) NULL,

	"ПодписьК" NUMBER(1) NULL,

	"ПодписьО" NUMBER(1) NULL,

	"Сумма" FLOAT(53) NULL,

	"УпрОБъек" RAW(16) NOT NULL,

	"Организация" RAW(16) NOT NULL,

	"Клиен" RAW(16) NOT NULL,

	 PRIMARY KEY ("primaryKey")
) ;


CREATE TABLE "STORMNETLOCKDATA"
(

	"LockKey" NVARCHAR2(300) NOT NULL,

	"UserName" NVARCHAR2(300) NOT NULL,

	"LockDate" DATE NULL,

	 PRIMARY KEY ("LockKey")
) ;


CREATE TABLE "STORMSETTINGS"
(

	"primaryKey" RAW(16) NOT NULL,

	"Module" nvarchar2(1000) NULL,

	"Name" nvarchar2(255) NULL,

	"Value" CLOB NULL,

	"User" nvarchar2(255) NULL,

	 PRIMARY KEY ("primaryKey")
) ;


CREATE TABLE "STORMAdvLimit"
(

	"primaryKey" RAW(16) NOT NULL,

	"User" nvarchar2(255) NULL,

	"Published" NUMBER(1) NULL,

	"Module" nvarchar2(255) NULL,

	"Name" nvarchar2(255) NULL,

	"Value" CLOB NULL,

	"HotKeyData" NUMBER(10) NULL,

	 PRIMARY KEY ("primaryKey")
) ;


CREATE TABLE "STORMFILTERSETTING"
(

	"primaryKey" RAW(16) NOT NULL,

	"Name" nvarchar2(255) NOT NULL,

	"DataObjectView" nvarchar2(255) NOT NULL,

	 PRIMARY KEY ("primaryKey")
) ;


CREATE TABLE "STORMWEBSEARCH"
(

	"primaryKey" RAW(16) NOT NULL,

	"Name" nvarchar2(255) NOT NULL,

	"Order" NUMBER(10) NOT NULL,

	"PresentView" nvarchar2(255) NOT NULL,

	"DetailedView" nvarchar2(255) NOT NULL,

	"FilterSetting_m0" RAW(16) NOT NULL,

	 PRIMARY KEY ("primaryKey")
) ;


CREATE TABLE "STORMFILTERDETAIL"
(

	"primaryKey" RAW(16) NOT NULL,

	"Caption" nvarchar2(255) NOT NULL,

	"DataObjectView" nvarchar2(255) NOT NULL,

	"ConnectMasterProp" nvarchar2(255) NOT NULL,

	"OwnerConnectProp" nvarchar2(255) NULL,

	"FilterSetting_m0" RAW(16) NOT NULL,

	 PRIMARY KEY ("primaryKey")
) ;


CREATE TABLE "STORMFILTERLOOKUP"
(

	"primaryKey" RAW(16) NOT NULL,

	"DataObjectType" nvarchar2(255) NOT NULL,

	"Container" nvarchar2(255) NULL,

	"ContainerTag" nvarchar2(255) NULL,

	"FieldsToView" nvarchar2(255) NULL,

	"FilterSetting_m0" RAW(16) NOT NULL,

	 PRIMARY KEY ("primaryKey")
) ;


CREATE TABLE "UserSetting"
(

	"primaryKey" RAW(16) NOT NULL,

	"AppName" nvarchar2(256) NULL,

	"UserName" nvarchar2(512) NULL,

	"UserGuid" RAW(16) NULL,

	"ModuleName" nvarchar2(1024) NULL,

	"ModuleGuid" RAW(16) NULL,

	"SettName" nvarchar2(256) NULL,

	"SettGuid" RAW(16) NULL,

	"SettLastAccessTime" DATE NULL,

	"StrVal" nvarchar2(256) NULL,

	"TxtVal" CLOB NULL,

	"IntVal" NUMBER(10) NULL,

	"BoolVal" NUMBER(1) NULL,

	"GuidVal" RAW(16) NULL,

	"DecimalVal" NUMBER(20,10) NULL,

	"DateTimeVal" DATE NULL,

	 PRIMARY KEY ("primaryKey")
) ;


CREATE TABLE "ApplicationLog"
(

	"primaryKey" RAW(16) NOT NULL,

	"Category" nvarchar2(64) NULL,

	"EventId" NUMBER(10) NULL,

	"Priority" NUMBER(10) NULL,

	"Severity" nvarchar2(32) NULL,

	"Title" nvarchar2(256) NULL,

	"Timestamp" DATE NULL,

	"MachineName" nvarchar2(32) NULL,

	"AppDomainName" nvarchar2(512) NULL,

	"ProcessId" nvarchar2(256) NULL,

	"ProcessName" nvarchar2(512) NULL,

	"ThreadName" nvarchar2(512) NULL,

	"Win32ThreadId" nvarchar2(128) NULL,

	"Message" nvarchar2(2000) NULL,

	"FormattedMessage" nvarchar2(2000) NULL,

	 PRIMARY KEY ("primaryKey")
) ;



ALTER TABLE "ПортфЦБ"
	ADD CONSTRAINT "ПортфЦБ_FСотр_9724" FOREIGN KEY ("Сотрудн") REFERENCES "Сотрудн" ("primaryKey");

CREATE INDEX "ПортфЦБ_IСотрудн" on "ПортфЦБ" ("Сотрудн");

ALTER TABLE "ПортфЦБ"
	ADD CONSTRAINT "ПортфЦБ_FОрга_3007" FOREIGN KEY ("Организация") REFERENCES "Организация" ("primaryKey");

CREATE INDEX "ПортфЦБ_IОрга_9353" on "ПортфЦБ" ("Организация");

ALTER TABLE "ПортфЦБ"
	ADD CONSTRAINT "ПортфЦБ_FУпрО_1101" FOREIGN KEY ("УпрОБъек") REFERENCES "УпрОБъек" ("primaryKey");

CREATE INDEX "ПортфЦБ_IУпрО_1554" on "ПортфЦБ" ("УпрОБъек");

ALTER TABLE "ПортфЦБ"
	ADD CONSTRAINT "ПортфЦБ_FКлиен_0" FOREIGN KEY ("Клиен") REFERENCES "Клиен" ("primaryKey");

CREATE INDEX "ПортфЦБ_IКлиен" on "ПортфЦБ" ("Клиен");

ALTER TABLE "Тч_Портф"
	ADD CONSTRAINT "Тч_Портф_FТипА_4267" FOREIGN KEY ("ТипАкц") REFERENCES "ТипАкц" ("primaryKey");

CREATE INDEX "Тч_Портф_IТипАкц" on "Тч_Портф" ("ТипАкц");

ALTER TABLE "Сотрудн"
	ADD CONSTRAINT "Сотрудн_FДолж_2914" FOREIGN KEY ("Должност") REFERENCES "Должност" ("primaryKey");

CREATE INDEX "Сотрудн_IДолж_4400" on "Сотрудн" ("Должност");

ALTER TABLE "РеестрАк"
	ADD CONSTRAINT "РеестрАк_FКлиен_0" FOREIGN KEY ("Клиен") REFERENCES "Клиен" ("primaryKey");

CREATE INDEX "РеестрАк_IКлиен" on "РеестрАк" ("Клиен");

ALTER TABLE "РеестрАк"
	ADD CONSTRAINT "РеестрАк_FСот_3989" FOREIGN KEY ("Сотрудн") REFERENCES "Сотрудн" ("primaryKey");

CREATE INDEX "РеестрАк_IСотр_753" on "РеестрАк" ("Сотрудн");

ALTER TABLE "РеестрАк"
	ADD CONSTRAINT "РеестрАк_FУпр_4905" FOREIGN KEY ("УпрОБъек") REFERENCES "УпрОБъек" ("primaryKey");

CREATE INDEX "РеестрАк_IУпр_5152" on "РеестрАк" ("УпрОБъек");

ALTER TABLE "Тч_реес"
	ADD CONSTRAINT "Тч_реес_FТипАкц_0" FOREIGN KEY ("ТипАкц") REFERENCES "ТипАкц" ("primaryKey");

CREATE INDEX "Тч_реес_IТипАкц" on "Тч_реес" ("ТипАкц");

ALTER TABLE "ВыплатДоход"
	ADD CONSTRAINT "ВыплатДоход_F_1428" FOREIGN KEY ("УпрОБъек") REFERENCES "УпрОБъек" ("primaryKey");

CREATE INDEX "ВыплатДоход_I_2542" on "ВыплатДоход" ("УпрОБъек");

ALTER TABLE "ВыплатДоход"
	ADD CONSTRAINT "ВыплатДоход_F_8355" FOREIGN KEY ("Сотрудн") REFERENCES "Сотрудн" ("primaryKey");

CREATE INDEX "ВыплатДоход_IС_663" on "ВыплатДоход" ("Сотрудн");

ALTER TABLE "ИнвВзн"
	ADD CONSTRAINT "ИнвВзн_FУпрОБ_6583" FOREIGN KEY ("УпрОБъек") REFERENCES "УпрОБъек" ("primaryKey");

CREATE INDEX "ИнвВзн_IУпрОБъек" on "ИнвВзн" ("УпрОБъек");

ALTER TABLE "ИнвВзн"
	ADD CONSTRAINT "ИнвВзн_FДоговр_789" FOREIGN KEY ("ДоговрИнв") REFERENCES "ДоговрИнв" ("primaryKey");

CREATE INDEX "ИнвВзн_IДогов_9485" on "ИнвВзн" ("ДоговрИнв");

ALTER TABLE "ДоговрИнв"
	ADD CONSTRAINT "ДоговрИнв_FУп_2989" FOREIGN KEY ("УпрОБъек") REFERENCES "УпрОБъек" ("primaryKey");

CREATE INDEX "ДоговрИнв_IУп_2056" on "ДоговрИнв" ("УпрОБъек");

ALTER TABLE "ДоговрИнв"
	ADD CONSTRAINT "ДоговрИнв_FОр_7232" FOREIGN KEY ("Организация") REFERENCES "Организация" ("primaryKey");

CREATE INDEX "ДоговрИнв_IОр_4063" on "ДоговрИнв" ("Организация");

ALTER TABLE "ДоговрИнв"
	ADD CONSTRAINT "ДоговрИнв_FКл_3398" FOREIGN KEY ("Клиен") REFERENCES "Клиен" ("primaryKey");

CREATE INDEX "ДоговрИнв_IКлиен" on "ДоговрИнв" ("Клиен");

ALTER TABLE "STORMWEBSEARCH"
	ADD CONSTRAINT "STORMWEBSEARCH_FSTORMFILT_6521" FOREIGN KEY ("FilterSetting_m0") REFERENCES "STORMFILTERSETTING" ("primaryKey");

ALTER TABLE "STORMFILTERDETAIL"
	ADD CONSTRAINT "STORMFILTERDETAIL_FSTORMF_2900" FOREIGN KEY ("FilterSetting_m0") REFERENCES "STORMFILTERSETTING" ("primaryKey");

ALTER TABLE "STORMFILTERLOOKUP"
	ADD CONSTRAINT "STORMFILTERLOOKUP_FSTORMF_1583" FOREIGN KEY ("FilterSetting_m0") REFERENCES "STORMFILTERSETTING" ("primaryKey");


