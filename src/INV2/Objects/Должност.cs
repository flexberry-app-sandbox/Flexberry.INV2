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
    /// Должност.
    /// </summary>
    // *** Start programmer edit section *** (Должност CustomAttributes)

    // *** End programmer edit section *** (Должност CustomAttributes)
    [AutoAltered()]
    [AccessType(ICSSoft.STORMNET.AccessType.none)]
    [View("ДолжностE", new string[] {
            "Должность as \'Должность\'",
            "Код as \'Код\'"})]
    [View("ДолжностL", new string[] {
            "Должность as \'Должность\'",
            "Код as \'Код\'"})]
    public class Должност : ICSSoft.STORMNET.DataObject
    {
        
        private string fДолжность;
        
        private int fКод;
        
        // *** Start programmer edit section *** (Должност CustomMembers)

        // *** End programmer edit section *** (Должност CustomMembers)

        
        /// <summary>
        /// Должность.
        /// </summary>
        // *** Start programmer edit section *** (Должност.Должность CustomAttributes)

        // *** End programmer edit section *** (Должност.Должность CustomAttributes)
        [StrLen(255)]
        public virtual string Должность
        {
            get
            {
                // *** Start programmer edit section *** (Должност.Должность Get start)

                // *** End programmer edit section *** (Должност.Должность Get start)
                string result = this.fДолжность;
                // *** Start programmer edit section *** (Должност.Должность Get end)

                // *** End programmer edit section *** (Должност.Должность Get end)
                return result;
            }
            set
            {
                // *** Start programmer edit section *** (Должност.Должность Set start)

                // *** End programmer edit section *** (Должност.Должность Set start)
                this.fДолжность = value;
                // *** Start programmer edit section *** (Должност.Должность Set end)

                // *** End programmer edit section *** (Должност.Должность Set end)
            }
        }
        
        /// <summary>
        /// Код.
        /// </summary>
        // *** Start programmer edit section *** (Должност.Код CustomAttributes)

        // *** End programmer edit section *** (Должност.Код CustomAttributes)
        public virtual int Код
        {
            get
            {
                // *** Start programmer edit section *** (Должност.Код Get start)

                // *** End programmer edit section *** (Должност.Код Get start)
                int result = this.fКод;
                // *** Start programmer edit section *** (Должност.Код Get end)

                // *** End programmer edit section *** (Должност.Код Get end)
                return result;
            }
            set
            {
                // *** Start programmer edit section *** (Должност.Код Set start)

                // *** End programmer edit section *** (Должност.Код Set start)
                this.fКод = value;
                // *** Start programmer edit section *** (Должност.Код Set end)

                // *** End programmer edit section *** (Должност.Код Set end)
            }
        }
        
        /// <summary>
        /// Class views container.
        /// </summary>
        public class Views
        {
            
            /// <summary>
            /// "ДолжностE" view.
            /// </summary>
            public static ICSSoft.STORMNET.View ДолжностE
            {
                get
                {
                    return ICSSoft.STORMNET.Information.GetView("ДолжностE", typeof(IIS.INV2.Должност));
                }
            }
            
            /// <summary>
            /// "ДолжностL" view.
            /// </summary>
            public static ICSSoft.STORMNET.View ДолжностL
            {
                get
                {
                    return ICSSoft.STORMNET.Information.GetView("ДолжностL", typeof(IIS.INV2.Должност));
                }
            }
        }
    }
}
