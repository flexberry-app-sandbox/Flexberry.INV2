﻿//------------------------------------------------------------------------------
// <auto-generated>
//     This code was generated by a tool.
//     Runtime Version:4.0.30319.42000
//
//     Changes to this file may cause incorrect behavior and will be lost if
//     the code is regenerated.
// </auto-generated>
//------------------------------------------------------------------------------

namespace IIS.INV2
{
    using System;
    using System.Xml;
    using ICSSoft.STORMNET;
    
    
    // *** Start programmer edit section *** (Using statements)

    // *** End programmer edit section *** (Using statements)


    /// <summary>
    /// Реестр ак.
    /// </summary>
    // *** Start programmer edit section *** (РеестрАк CustomAttributes)

    // *** End programmer edit section *** (РеестрАк CustomAttributes)
    [AutoAltered()]
    [Caption("Реестр ак")]
    [AccessType(ICSSoft.STORMNET.AccessType.none)]
    [View("РеестрАкE", new string[] {
            "Дата as \'Дата\'",
            "Номер as \'Номер\'",
            "Подпись as \'Подпись\'",
            "Клиен as \'Клиен\'",
            "Клиен.Наим as \'Наим\'",
            "Сотрудн as \'Сотрудн\'",
            "Сотрудн.ФИО as \'ФИО\'",
            "УпрОБъек as \'Упр о бъек\'"}, Hidden=new string[] {
            "Клиен.Наим",
            "Сотрудн.ФИО"})]
    [MasterViewDefineAttribute("РеестрАкE", "Клиен", ICSSoft.STORMNET.LookupTypeEnum.Standard, "", "Наим")]
    [MasterViewDefineAttribute("РеестрАкE", "Сотрудн", ICSSoft.STORMNET.LookupTypeEnum.Standard, "", "ФИО")]
    [MasterViewDefineAttribute("РеестрАкE", "УпрОБъек", ICSSoft.STORMNET.LookupTypeEnum.Standard, "", "")]
    [View("РеестрАкL", new string[] {
            "Дата as \'Дата\'",
            "Номер as \'Номер\'",
            "Подпись as \'Подпись\'",
            "Клиен.Наим as \'Наим\'",
            "Сотрудн.ФИО as \'ФИО\'"})]
    public class РеестрАк : ICSSoft.STORMNET.DataObject
    {
        
        private System.DateTime fДата;
        
        private int fНомер;
        
        private bool fПодпись;
        
        private IIS.INV2.Клиен fКлиен;
        
        private IIS.INV2.Сотрудн fСотрудн;
        
        private IIS.INV2.УпрОБъек fУпрОБъек;
        
        // *** Start programmer edit section *** (РеестрАк CustomMembers)

        // *** End programmer edit section *** (РеестрАк CustomMembers)

        
        /// <summary>
        /// Дата.
        /// </summary>
        // *** Start programmer edit section *** (РеестрАк.Дата CustomAttributes)

        // *** End programmer edit section *** (РеестрАк.Дата CustomAttributes)
        public virtual System.DateTime Дата
        {
            get
            {
                // *** Start programmer edit section *** (РеестрАк.Дата Get start)

                // *** End programmer edit section *** (РеестрАк.Дата Get start)
                System.DateTime result = this.fДата;
                // *** Start programmer edit section *** (РеестрАк.Дата Get end)

                // *** End programmer edit section *** (РеестрАк.Дата Get end)
                return result;
            }
            set
            {
                // *** Start programmer edit section *** (РеестрАк.Дата Set start)

                // *** End programmer edit section *** (РеестрАк.Дата Set start)
                this.fДата = value;
                // *** Start programmer edit section *** (РеестрАк.Дата Set end)

                // *** End programmer edit section *** (РеестрАк.Дата Set end)
            }
        }
        
        /// <summary>
        /// Номер.
        /// </summary>
        // *** Start programmer edit section *** (РеестрАк.Номер CustomAttributes)

        // *** End programmer edit section *** (РеестрАк.Номер CustomAttributes)
        public virtual int Номер
        {
            get
            {
                // *** Start programmer edit section *** (РеестрАк.Номер Get start)

                // *** End programmer edit section *** (РеестрАк.Номер Get start)
                int result = this.fНомер;
                // *** Start programmer edit section *** (РеестрАк.Номер Get end)

                // *** End programmer edit section *** (РеестрАк.Номер Get end)
                return result;
            }
            set
            {
                // *** Start programmer edit section *** (РеестрАк.Номер Set start)

                // *** End programmer edit section *** (РеестрАк.Номер Set start)
                this.fНомер = value;
                // *** Start programmer edit section *** (РеестрАк.Номер Set end)

                // *** End programmer edit section *** (РеестрАк.Номер Set end)
            }
        }
        
        /// <summary>
        /// Подпись.
        /// </summary>
        // *** Start programmer edit section *** (РеестрАк.Подпись CustomAttributes)

        // *** End programmer edit section *** (РеестрАк.Подпись CustomAttributes)
        public virtual bool Подпись
        {
            get
            {
                // *** Start programmer edit section *** (РеестрАк.Подпись Get start)

                // *** End programmer edit section *** (РеестрАк.Подпись Get start)
                bool result = this.fПодпись;
                // *** Start programmer edit section *** (РеестрАк.Подпись Get end)

                // *** End programmer edit section *** (РеестрАк.Подпись Get end)
                return result;
            }
            set
            {
                // *** Start programmer edit section *** (РеестрАк.Подпись Set start)

                // *** End programmer edit section *** (РеестрАк.Подпись Set start)
                this.fПодпись = value;
                // *** Start programmer edit section *** (РеестрАк.Подпись Set end)

                // *** End programmer edit section *** (РеестрАк.Подпись Set end)
            }
        }
        
        /// <summary>
        /// Реестр ак.
        /// </summary>
        // *** Start programmer edit section *** (РеестрАк.Клиен CustomAttributes)

        // *** End programmer edit section *** (РеестрАк.Клиен CustomAttributes)
        [PropertyStorage(new string[] {
                "Клиен"})]
        [NotNull()]
        public virtual IIS.INV2.Клиен Клиен
        {
            get
            {
                // *** Start programmer edit section *** (РеестрАк.Клиен Get start)

                // *** End programmer edit section *** (РеестрАк.Клиен Get start)
                IIS.INV2.Клиен result = this.fКлиен;
                // *** Start programmer edit section *** (РеестрАк.Клиен Get end)

                // *** End programmer edit section *** (РеестрАк.Клиен Get end)
                return result;
            }
            set
            {
                // *** Start programmer edit section *** (РеестрАк.Клиен Set start)

                // *** End programmer edit section *** (РеестрАк.Клиен Set start)
                this.fКлиен = value;
                // *** Start programmer edit section *** (РеестрАк.Клиен Set end)

                // *** End programmer edit section *** (РеестрАк.Клиен Set end)
            }
        }
        
        /// <summary>
        /// Реестр ак.
        /// </summary>
        // *** Start programmer edit section *** (РеестрАк.Сотрудн CustomAttributes)

        // *** End programmer edit section *** (РеестрАк.Сотрудн CustomAttributes)
        [PropertyStorage(new string[] {
                "Сотрудн"})]
        [NotNull()]
        public virtual IIS.INV2.Сотрудн Сотрудн
        {
            get
            {
                // *** Start programmer edit section *** (РеестрАк.Сотрудн Get start)

                // *** End programmer edit section *** (РеестрАк.Сотрудн Get start)
                IIS.INV2.Сотрудн result = this.fСотрудн;
                // *** Start programmer edit section *** (РеестрАк.Сотрудн Get end)

                // *** End programmer edit section *** (РеестрАк.Сотрудн Get end)
                return result;
            }
            set
            {
                // *** Start programmer edit section *** (РеестрАк.Сотрудн Set start)

                // *** End programmer edit section *** (РеестрАк.Сотрудн Set start)
                this.fСотрудн = value;
                // *** Start programmer edit section *** (РеестрАк.Сотрудн Set end)

                // *** End programmer edit section *** (РеестрАк.Сотрудн Set end)
            }
        }
        
        /// <summary>
        /// Реестр ак.
        /// </summary>
        // *** Start programmer edit section *** (РеестрАк.УпрОБъек CustomAttributes)

        // *** End programmer edit section *** (РеестрАк.УпрОБъек CustomAttributes)
        [PropertyStorage(new string[] {
                "УпрОБъек"})]
        [NotNull()]
        public virtual IIS.INV2.УпрОБъек УпрОБъек
        {
            get
            {
                // *** Start programmer edit section *** (РеестрАк.УпрОБъек Get start)

                // *** End programmer edit section *** (РеестрАк.УпрОБъек Get start)
                IIS.INV2.УпрОБъек result = this.fУпрОБъек;
                // *** Start programmer edit section *** (РеестрАк.УпрОБъек Get end)

                // *** End programmer edit section *** (РеестрАк.УпрОБъек Get end)
                return result;
            }
            set
            {
                // *** Start programmer edit section *** (РеестрАк.УпрОБъек Set start)

                // *** End programmer edit section *** (РеестрАк.УпрОБъек Set start)
                this.fУпрОБъек = value;
                // *** Start programmer edit section *** (РеестрАк.УпрОБъек Set end)

                // *** End programmer edit section *** (РеестрАк.УпрОБъек Set end)
            }
        }
        
        /// <summary>
        /// Class views container.
        /// </summary>
        public class Views
        {
            
            /// <summary>
            /// "РеестрАкE" view.
            /// </summary>
            public static ICSSoft.STORMNET.View РеестрАкE
            {
                get
                {
                    return ICSSoft.STORMNET.Information.GetView("РеестрАкE", typeof(IIS.INV2.РеестрАк));
                }
            }
            
            /// <summary>
            /// "РеестрАкL" view.
            /// </summary>
            public static ICSSoft.STORMNET.View РеестрАкL
            {
                get
                {
                    return ICSSoft.STORMNET.Information.GetView("РеестрАкL", typeof(IIS.INV2.РеестрАк));
                }
            }
        }
    }
}
