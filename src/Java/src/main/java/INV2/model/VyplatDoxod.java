package INV2.model;

import org.eclipse.persistence.annotations.Convert;
import org.eclipse.persistence.annotations.Converter;
import INV2.utils.UUIDConverter;

import javax.persistence.*;
import java.util.UUID;

import com.sap.olingo.jpa.metadata.core.edm.annotation.EdmIgnore;
import java.util.Date;

/**
 * Entity implementation class for Entity: ВыплатДоход
 */
@Entity(name = "IISINV2ВыплатДоход")
@Table(schema = "public", name = "ВыплатДоход")
public class VyplatDoxod {

    @Id
    @Converter(converterClass = UUIDConverter.class, name = "primarykey")
    @Convert("primarykey")
    @Column(name = "primarykey", length = 16, unique = true, nullable = false)
    private UUID primarykey;

    @Column(name = "Дата")
    private Date дата;

    @Column(name = "Требования")
    private String требования;

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
    @Converter(converterClass = UUIDConverter.class, name = "Sotrudn")
    @Convert("Sotrudn")
    @Column(name = "Сотрудн", length = 16, unique = true, nullable = false)
    private UUID _sotrudnid;

    @ManyToOne(optional = false, fetch = FetchType.LAZY)
    @JoinColumn(name = "Sotrudn", insertable = false, updatable = false)
    private Sotrudn sotrudn;


    public VyplatDoxod() {
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

    public String getТребования() {
      return требования;
    }

    public void setТребования(String требования) {
      this.требования = требования;
    }

    public Integer getНомер() {
      return номер;
    }

    public void setНомер(Integer номер) {
      this.номер = номер;
    }


}