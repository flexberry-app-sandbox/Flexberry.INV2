package INV2.model;

import org.eclipse.persistence.annotations.Convert;
import org.eclipse.persistence.annotations.Converter;
import INV2.utils.UUIDConverter;

import javax.persistence.*;
import java.util.UUID;

import com.sap.olingo.jpa.metadata.core.edm.annotation.EdmIgnore;
import java.util.Date;

/**
 * Entity implementation class for Entity: ПортфЦБ
 */
@Entity(name = "IISINV2ПортфЦБ")
@Table(schema = "public", name = "ПортфЦБ")
public class PortfCB {

    @Id
    @Converter(converterClass = UUIDConverter.class, name = "primarykey")
    @Convert("primarykey")
    @Column(name = "primarykey", length = 16, unique = true, nullable = false)
    private UUID primarykey;

    @Column(name = "Номер")
    private Integer номер;

    @Column(name = "Дата")
    private Date дата;

    @Column(name = "Обязаности")
    private String обязаности;

    @Column(name = "Сумма")
    private Float сумма;

    @Column(name = "ПодписьК")
    private Boolean подписьк;

    @Column(name = "ПодписьО")
    private Boolean подписьо;

    @EdmIgnore
    @Converter(converterClass = UUIDConverter.class, name = "Sotrudn")
    @Convert("Sotrudn")
    @Column(name = "Сотрудн", length = 16, unique = true, nullable = false)
    private UUID _sotrudnid;

    @ManyToOne(optional = false, fetch = FetchType.LAZY)
    @JoinColumn(name = "Sotrudn", insertable = false, updatable = false)
    private Sotrudn sotrudn;

    @EdmIgnore
    @Converter(converterClass = UUIDConverter.class, name = "Organizaciya")
    @Convert("Organizaciya")
    @Column(name = "Организация", length = 16, unique = true, nullable = false)
    private UUID _organizaciyaid;

    @ManyToOne(optional = false, fetch = FetchType.LAZY)
    @JoinColumn(name = "Organizaciya", insertable = false, updatable = false)
    private Organizaciya organizaciya;

    @EdmIgnore
    @Converter(converterClass = UUIDConverter.class, name = "UprOB'ek")
    @Convert("UprOB'ek")
    @Column(name = "УпрОБъек", length = 16, unique = true, nullable = false)
    private UUID _uprob'ekid;

    @ManyToOne(optional = false, fetch = FetchType.LAZY)
    @JoinColumn(name = "UprOB'ek", insertable = false, updatable = false)
    private UprOB'ek uprob'ek;

    @EdmIgnore
    @Converter(converterClass = UUIDConverter.class, name = "Klien")
    @Convert("Klien")
    @Column(name = "Клиен", length = 16, unique = true, nullable = false)
    private UUID _klienid;

    @ManyToOne(optional = false, fetch = FetchType.LAZY)
    @JoinColumn(name = "Klien", insertable = false, updatable = false)
    private Klien klien;


    public PortfCB() {
        super();
    }

    public void setPrimarykey(UUID primarykey) {
        this.primarykey = primarykey;
    }

    public UUID getPrimarykey() {
        return primarykey;
    }

    public Integer getНомер() {
      return номер;
    }

    public void setНомер(Integer номер) {
      this.номер = номер;
    }

    public Date getДата() {
      return дата;
    }

    public void setДата(Date дата) {
      this.дата = дата;
    }

    public String getОбязаности() {
      return обязаности;
    }

    public void setОбязаности(String обязаности) {
      this.обязаности = обязаности;
    }

    public Float getСумма() {
      return сумма;
    }

    public void setСумма(Float сумма) {
      this.сумма = сумма;
    }

    public Boolean getПодписьК() {
      return подписьк;
    }

    public void setПодписьК(Boolean подписьк) {
      this.подписьк = подписьк;
    }

    public Boolean getПодписьО() {
      return подписьо;
    }

    public void setПодписьО(Boolean подписьо) {
      this.подписьо = подписьо;
    }


}