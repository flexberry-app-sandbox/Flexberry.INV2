



CREATE TABLE [ПортфЦБ] (

	 [primaryKey] UNIQUEIDENTIFIER  NOT NULL,

	 [Дата] DATETIME  NULL,

	 [Номер] INT  NULL,

	 [Обязаности] VARCHAR(255)  NULL,

	 [ПодписьК] BIT  NULL,

	 [ПодписьО] BIT  NULL,

	 [Сумма] REAL  NULL,

	 [Клиен] UNIQUEIDENTIFIER  NOT NULL,

	 [Организация] UNIQUEIDENTIFIER  NOT NULL,

	 [Сотрудн] UNIQUEIDENTIFIER  NOT NULL,

	 [УпрОБъек] UNIQUEIDENTIFIER  NOT NULL,

	 PRIMARY KEY ([primaryKey]))


CREATE TABLE [Организация] (

	 [primaryKey] UNIQUEIDENTIFIER  NOT NULL,

	 [Банк] VARCHAR(255)  NULL,

	 [БИК] INT  NULL,

	 [ИНН] INT  NULL,

	 [КПП] INT  NULL,

	 [Наим] VARCHAR(255)  NULL,

	 [РасСчет] INT  NULL,

	 PRIMARY KEY ([primaryKey]))


CREATE TABLE [Тч_Портф] (

	 [primaryKey] UNIQUEIDENTIFIER  NOT NULL,

	 [Колич] INT  NULL,

	 [Номинал] REAL  NULL,

	 [Сумма] REAL  NULL,

	 [ТипАкц] UNIQUEIDENTIFIER  NOT NULL,

	 PRIMARY KEY ([primaryKey]))


CREATE TABLE [Сотрудн] (

	 [primaryKey] UNIQUEIDENTIFIER  NOT NULL,

	 [ФИО] VARCHAR(255)  NULL,

	 [Должност] UNIQUEIDENTIFIER  NOT NULL,

	 PRIMARY KEY ([primaryKey]))


CREATE TABLE [РеестрАк] (

	 [primaryKey] UNIQUEIDENTIFIER  NOT NULL,

	 [Дата] DATETIME  NULL,

	 [Номер] INT  NULL,

	 [Подпись] BIT  NULL,

	 [Клиен] UNIQUEIDENTIFIER  NOT NULL,

	 [Сотрудн] UNIQUEIDENTIFIER  NOT NULL,

	 [УпрОБъек] UNIQUEIDENTIFIER  NOT NULL,

	 PRIMARY KEY ([primaryKey]))


CREATE TABLE [ТЧ_выпл] (

	 [primaryKey] UNIQUEIDENTIFIER  NOT NULL,

	 [Сумма] REAL  NULL,

	 PRIMARY KEY ([primaryKey]))


CREATE TABLE [Клиен] (

	 [primaryKey] UNIQUEIDENTIFIER  NOT NULL,

	 [Банк] VARCHAR(255)  NULL,

	 [БИК] INT  NULL,

	 [ИНН] INT  NULL,

	 [КПП] INT  NULL,

	 [Наим] VARCHAR(255)  NULL,

	 [РасСчет] INT  NULL,

	 PRIMARY KEY ([primaryKey]))


CREATE TABLE [Тч_реес] (

	 [primaryKey] UNIQUEIDENTIFIER  NOT NULL,

	 [ДоляУК] REAL  NULL,

	 [Номинал] REAL  NULL,

	 [Основание] VARCHAR(255)  NULL,

	 [Сумма] REAL  NULL,

	 [ТипАкц] UNIQUEIDENTIFIER  NOT NULL,

	 PRIMARY KEY ([primaryKey]))


CREATE TABLE [ВыплатДоход] (

	 [primaryKey] UNIQUEIDENTIFIER  NOT NULL,

	 [Дата] DATETIME  NULL,

	 [Номер] INT  NULL,

	 [Требования] VARCHAR(255)  NULL,

	 [Сотрудн] UNIQUEIDENTIFIER  NOT NULL,

	 [УпрОБъек] UNIQUEIDENTIFIER  NOT NULL,

	 PRIMARY KEY ([primaryKey]))


CREATE TABLE [Должност] (

	 [primaryKey] UNIQUEIDENTIFIER  NOT NULL,

	 [Должность] VARCHAR(255)  NULL,

	 [Код] INT  NULL,

	 PRIMARY KEY ([primaryKey]))


CREATE TABLE [УпрОБъек] (

	 [primaryKey] UNIQUEIDENTIFIER  NOT NULL,

	 PRIMARY KEY ([primaryKey]))


CREATE TABLE [ИнвВзн] (

	 [primaryKey] UNIQUEIDENTIFIER  NOT NULL,

	 [Дата] DATETIME  NULL,

	 [Номер] INT  NULL,

	 [Подпись] BIT  NULL,

	 [Сумма] REAL  NULL,

	 [ДоговрИнв] UNIQUEIDENTIFIER  NOT NULL,

	 [УпрОБъек] UNIQUEIDENTIFIER  NOT NULL,

	 PRIMARY KEY ([primaryKey]))


CREATE TABLE [ТипАкц] (

	 [primaryKey] UNIQUEIDENTIFIER  NOT NULL,

	 [ТипАкции] VARCHAR(255)  NULL,

	 PRIMARY KEY ([primaryKey]))


CREATE TABLE [ДоговрИнв] (

	 [primaryKey] UNIQUEIDENTIFIER  NOT NULL,

	 [Дата] DATETIME  NULL,

	 [Номер] INT  NULL,

	 [Обяз] VARCHAR(255)  NULL,

	 [ПодписьК] BIT  NULL,

	 [ПодписьО] BIT  NULL,

	 [ПредмДог] VARCHAR(255)  NULL,

	 [Сумма] REAL  NULL,

	 [Требования] VARCHAR(255)  NULL,

	 [Клиен] UNIQUEIDENTIFIER  NOT NULL,

	 [Организация] UNIQUEIDENTIFIER  NOT NULL,

	 [УпрОБъек] UNIQUEIDENTIFIER  NOT NULL,

	 PRIMARY KEY ([primaryKey]))


CREATE TABLE [STORMNETLOCKDATA] (

	 [LockKey] VARCHAR(300)  NOT NULL,

	 [UserName] VARCHAR(300)  NOT NULL,

	 [LockDate] DATETIME  NULL,

	 PRIMARY KEY ([LockKey]))


CREATE TABLE [STORMSETTINGS] (

	 [primaryKey] uniqueidentifier  NOT NULL,

	 [Module] varchar(1000)  NULL,

	 [Name] varchar(255)  NULL,

	 [Value] text  NULL,

	 [User] varchar(255)  NULL,

	 PRIMARY KEY ([primaryKey]))


CREATE TABLE [STORMAdvLimit] (

	 [primaryKey] uniqueidentifier  NOT NULL,

	 [User] varchar(255)  NULL,

	 [Published] bit  NULL,

	 [Module] varchar(255)  NULL,

	 [Name] varchar(255)  NULL,

	 [Value] text  NULL,

	 [HotKeyData] int  NULL,

	 PRIMARY KEY ([primaryKey]))


CREATE TABLE [STORMFILTERSETTING] (

	 [primaryKey] uniqueidentifier  NOT NULL,

	 [Name] varchar(255)  NOT NULL,

	 [DataObjectView] varchar(255)  NOT NULL,

	 PRIMARY KEY ([primaryKey]))


CREATE TABLE [STORMWEBSEARCH] (

	 [primaryKey] uniqueidentifier  NOT NULL,

	 [Name] varchar(255)  NOT NULL,

	 [Order] INT  NOT NULL,

	 [PresentView] varchar(255)  NOT NULL,

	 [DetailedView] varchar(255)  NOT NULL,

	 [FilterSetting_m0] uniqueidentifier  NOT NULL,

	 PRIMARY KEY ([primaryKey]))


CREATE TABLE [STORMFILTERDETAIL] (

	 [primaryKey] uniqueidentifier  NOT NULL,

	 [Caption] varchar(255)  NOT NULL,

	 [DataObjectView] varchar(255)  NOT NULL,

	 [ConnectMasterProp] varchar(255)  NOT NULL,

	 [OwnerConnectProp] varchar(255)  NULL,

	 [FilterSetting_m0] uniqueidentifier  NOT NULL,

	 PRIMARY KEY ([primaryKey]))


CREATE TABLE [STORMFILTERLOOKUP] (

	 [primaryKey] uniqueidentifier  NOT NULL,

	 [DataObjectType] varchar(255)  NOT NULL,

	 [Container] varchar(255)  NULL,

	 [ContainerTag] varchar(255)  NULL,

	 [FieldsToView] varchar(255)  NULL,

	 [FilterSetting_m0] uniqueidentifier  NOT NULL,

	 PRIMARY KEY ([primaryKey]))


CREATE TABLE [UserSetting] (

	 [primaryKey] uniqueidentifier  NOT NULL,

	 [AppName] varchar(256)  NULL,

	 [UserName] varchar(512)  NULL,

	 [UserGuid] uniqueidentifier  NULL,

	 [ModuleName] varchar(1024)  NULL,

	 [ModuleGuid] uniqueidentifier  NULL,

	 [SettName] varchar(256)  NULL,

	 [SettGuid] uniqueidentifier  NULL,

	 [SettLastAccessTime] DATETIME  NULL,

	 [StrVal] varchar(256)  NULL,

	 [TxtVal] varchar(max)  NULL,

	 [IntVal] int  NULL,

	 [BoolVal] bit  NULL,

	 [GuidVal] uniqueidentifier  NULL,

	 [DecimalVal] decimal(20,10)  NULL,

	 [DateTimeVal] DATETIME  NULL,

	 PRIMARY KEY ([primaryKey]))


CREATE TABLE [ApplicationLog] (

	 [primaryKey] uniqueidentifier  NOT NULL,

	 [Category] varchar(64)  NULL,

	 [EventId] INT  NULL,

	 [Priority] INT  NULL,

	 [Severity] varchar(32)  NULL,

	 [Title] varchar(256)  NULL,

	 [Timestamp] DATETIME  NULL,

	 [MachineName] varchar(32)  NULL,

	 [AppDomainName] varchar(512)  NULL,

	 [ProcessId] varchar(256)  NULL,

	 [ProcessName] varchar(512)  NULL,

	 [ThreadName] varchar(512)  NULL,

	 [Win32ThreadId] varchar(128)  NULL,

	 [Message] varchar(2500)  NULL,

	 [FormattedMessage] varchar(max)  NULL,

	 PRIMARY KEY ([primaryKey]))




