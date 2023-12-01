package INV2.model;

import org.eclipse.persistence.annotations.Convert;
import org.eclipse.persistence.annotations.Converter;
import INV2.utils.UUIDConverter;

import javax.persistence.*;
import java.util.UUID;

import com.sap.olingo.jpa.metadata.core.edm.annotation.EdmIgnore;

/**
 * Entity implementation class for Entity: Тч_Портф
 */
@Entity(name = "IISINV2Тч_Портф")
@Table(schema = "public", name = "Тч_Портф")
public class Tch_Portf {

    @Id
    @Converter(converterClass = UUIDConverter.class, name = "primarykey")
    @Convert("primarykey")
    @Column(name = "primarykey", length = 16, unique = true, nullable = false)
    private UUID primarykey;

    @Column(name = "Номинал")
    private Float номинал;

    @Column(name = "Колич")
    private Integer колич;

    @Column(name = "Сумма")
    private Float сумма;

    @EdmIgnore
    @Converter(converterClass = UUIDConverter.class, name = "TipAkc")
    @Convert("TipAkc")
    @Column(name = "ТипАкц", length = 16, unique = true, nullable = false)
    private UUID _tipakcid;

    @ManyToOne(optional = false, fetch = FetchType.LAZY)
    @JoinColumn(name = "TipAkc", insertable = false, updatable = false)
    private TipAkc tipakc;


    public Tch_Portf() {
        super();
    }

    public void setPrimarykey(UUID primarykey) {
        this.primarykey = primarykey;
    }

    public UUID getPrimarykey() {
        return primarykey;
    }

    public Float getНоминал() {
      return номинал;
    }

    public void setНоминал(Float номинал) {
      this.номинал = номинал;
    }

    public Integer getКолич() {
      return колич;
    }

    public void setКолич(Integer колич) {
      this.колич = колич;
    }

    public Float getСумма() {
      return сумма;
    }

    public void setСумма(Float сумма) {
      this.сумма = сумма;
    }


}