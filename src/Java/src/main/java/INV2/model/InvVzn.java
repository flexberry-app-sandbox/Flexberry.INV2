package INV2.model;

import org.eclipse.persistence.annotations.Convert;
import org.eclipse.persistence.annotations.Converter;
import INV2.utils.UUIDConverter;

import javax.persistence.*;
import java.util.UUID;

import com.sap.olingo.jpa.metadata.core.edm.annotation.EdmIgnore;
import java.util.Date;

/**
 * Entity implementation class for Entity: ИнвВзн
 */
@Entity(name = "IISINV2ИнвВзн")
@Table(schema = "public", name = "ИнвВзн")
public class InvVzn {

    @Id
    @Converter(converterClass = UUIDConverter.class, name = "primarykey")
    @Convert("primarykey")
    @Column(name = "primarykey", length = 16, unique = true, nullable = false)
    private UUID primarykey;

    @Column(name = "Дата")
    private Date дата;

    @Column(name = "Сумма")
    private Float сумма;

    @Column(name = "Подпись")
    private Boolean подпись;

    @Column(name = "Номер")
    private Integer номер;

    @EdmIgnore
    @Converter(converterClass = UUIDConverter.class, name = "UprOB'ek")
    @Convert("UprOB'ek")
    @Column(name = "УпрОБъек", length = 16, unique = true, nullable = false)
    private UUID _uprob'ekid;

    @ManyToOne(optional = false, fetch = FetchType.LAZY)
    @JoinColumn(name = "UprOB'ek", insertable = false, updatable = false)
    private UprOB'ek uprob'ek;

    @EdmIgnore
    @Converter(converterClass = UUIDConverter.class, name = "DogovrInv")
    @Convert("DogovrInv")
    @Column(name = "ДоговрИнв", length = 16, unique = true, nullable = false)
    private UUID _dogovrinvid;

    @ManyToOne(optional = false, fetch = FetchType.LAZY)
    @JoinColumn(name = "DogovrInv", insertable = false, updatable = false)
    private DogovrInv dogovrinv;


    public InvVzn() {
        super();
    }

    public void setPrimarykey(UUID primarykey) {
        this.primarykey = primarykey;
    }

    public UUID getPrimarykey() {
        return primarykey;
    }

    public Date getДата() {
      return дата;
    }

    public void setДата(Date дата) {
      this.дата = дата;
    }

    public Float getСумма() {
      return сумма;
    }

    public void setСумма(Float сумма) {
      this.сумма = сумма;
    }

    public Boolean getПодпись() {
      return подпись;
    }

    public void setПодпись(Boolean подпись) {
      this.подпись = подпись;
    }

    public Integer getНомер() {
      return номер;
    }

    public void setНомер(Integer номер) {
      this.номер = номер;
    }


}