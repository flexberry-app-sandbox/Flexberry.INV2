package INV2.model;

import org.eclipse.persistence.annotations.Convert;
import org.eclipse.persistence.annotations.Converter;
import INV2.utils.UUIDConverter;

import javax.persistence.*;
import java.util.UUID;

import com.sap.olingo.jpa.metadata.core.edm.annotation.EdmIgnore;
import java.util.Date;

/**
 * Entity implementation class for Entity: ДоговрИнв
 */
@Entity(name = "IISINV2ДоговрИнв")
@Table(schema = "public", name = "ДоговрИнв")
public class DogovrInv {

    @Id
    @Converter(converterClass = UUIDConverter.class, name = "primarykey")
    @Convert("primarykey")
    @Column(name = "primarykey", length = 16, unique = true, nullable = false)
    private UUID primarykey;

    @Column(name = "Требования")
    private String требования;

    @Column(name = "Дата")
    private Date дата;

    @Column(name = "Номер")
    private Integer номер;

    @Column(name = "ПредмДог")
    private String предмдог;

    @Column(name = "Обяз")
    private String обяз;

    @Column(name = "ПодписьК")
    private Boolean подписьк;

    @Column(name = "ПодписьО")
    private Boolean подписьо;

    @Column(name = "Сумма")
    private Float сумма;

    @EdmIgnore
    @Converter(converterClass = UUIDConverter.class, name = "UprOB'ek")
    @Convert("UprOB'ek")
    @Column(name = "УпрОБъек", length = 16, unique = true, nullable = false)
    private UUID _uprob'ekid;

    @ManyToOne(optional = false, fetch = FetchType.LAZY)
    @JoinColumn(name = "UprOB'ek", insertable = false, updatable = false)
    private UprOB'ek uprob'ek;

    @EdmIgnore
    @Converter(converterClass = UUIDConverter.class, name = "Organizaciya")
    @Convert("Organizaciya")
    @Column(name = "Организация", length = 16, unique = true, nullable = false)
    private UUID _organizaciyaid;

    @ManyToOne(optional = false, fetch = FetchType.LAZY)
    @JoinColumn(name = "Organizaciya", insertable = false, updatable = false)
    private Organizaciya organizaciya;

    @EdmIgnore
    @Converter(converterClass = UUIDConverter.class, name = "Klien")
    @Convert("Klien")
    @Column(name = "Клиен", length = 16, unique = true, nullable = false)
    private UUID _klienid;

    @ManyToOne(optional = false, fetch = FetchType.LAZY)
    @JoinColumn(name = "Klien", insertable = false, updatable = false)
    private Klien klien;


    public DogovrInv() {
        super();
    }

    public void setPrimarykey(UUID primarykey) {
        this.primarykey = primarykey;
    }

    public UUID getPrimarykey() {
        return primarykey;
    }

    public String getТребования() {
      return требования;
    }

    public void setТребования(String требования) {
      this.требования = требования;
    }

    public Date getДата() {
      return дата;
    }

    public void setДата(Date дата) {
      this.дата = дата;
    }

    public Integer getНомер() {
      return номер;
    }

    public void setНомер(Integer номер) {
      this.номер = номер;
    }

    public String getПредмДог() {
      return предмдог;
    }

    public void setПредмДог(String предмдог) {
      this.предмдог = предмдог;
    }

    public String getОбяз() {
      return обяз;
    }

    public void setОбяз(String обяз) {
      this.обяз = обяз;
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

    public Float getСумма() {
      return сумма;
    }

    public void setСумма(Float сумма) {
      this.сумма = сумма;
    }


}