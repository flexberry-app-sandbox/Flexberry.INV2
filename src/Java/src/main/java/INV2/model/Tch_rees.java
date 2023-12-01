package INV2.model;

import org.eclipse.persistence.annotations.Convert;
import org.eclipse.persistence.annotations.Converter;
import INV2.utils.UUIDConverter;

import javax.persistence.*;
import java.util.UUID;

import com.sap.olingo.jpa.metadata.core.edm.annotation.EdmIgnore;

/**
 * Entity implementation class for Entity: Тч_реес
 */
@Entity(name = "IISINV2Тч_реес")
@Table(schema = "public", name = "Тч_реес")
public class Tch_rees {

    @Id
    @Converter(converterClass = UUIDConverter.class, name = "primarykey")
    @Convert("primarykey")
    @Column(name = "primarykey", length = 16, unique = true, nullable = false)
    private UUID primarykey;

    @Column(name = "Номинал")
    private Float номинал;

    @Column(name = "Сумма")
    private Float сумма;

    @Column(name = "ДоляУК")
    private Float доляук;

    @Column(name = "Основание")
    private String основание;

    @EdmIgnore
    @Converter(converterClass = UUIDConverter.class, name = "TipAkc")
    @Convert("TipAkc")
    @Column(name = "ТипАкц", length = 16, unique = true, nullable = false)
    private UUID _tipakcid;

    @ManyToOne(optional = false, fetch = FetchType.LAZY)
    @JoinColumn(name = "TipAkc", insertable = false, updatable = false)
    private TipAkc tipakc;


    public Tch_rees() {
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

    public Float getСумма() {
      return сумма;
    }

    public void setСумма(Float сумма) {
      this.сумма = сумма;
    }

    public Float getДоляУК() {
      return доляук;
    }

    public void setДоляУК(Float доляук) {
      this.доляук = доляук;
    }

    public String getОснование() {
      return основание;
    }

    public void setОснование(String основание) {
      this.основание = основание;
    }


}