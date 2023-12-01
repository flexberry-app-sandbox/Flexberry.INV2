package INV2.model;

import org.eclipse.persistence.annotations.Convert;
import org.eclipse.persistence.annotations.Converter;
import INV2.utils.UUIDConverter;

import javax.persistence.*;
import java.util.UUID;


/**
 * Entity implementation class for Entity: ТЧ_выпл
 */
@Entity(name = "IISINV2ТЧ_выпл")
@Table(schema = "public", name = "ТЧ_выпл")
public class TCH_vypl {

    @Id
    @Converter(converterClass = UUIDConverter.class, name = "primarykey")
    @Convert("primarykey")
    @Column(name = "primarykey", length = 16, unique = true, nullable = false)
    private UUID primarykey;

    @Column(name = "Сумма")
    private Float сумма;


    public TCH_vypl() {
        super();
    }

    public void setPrimarykey(UUID primarykey) {
        this.primarykey = primarykey;
    }

    public UUID getPrimarykey() {
        return primarykey;
    }

    public Float getСумма() {
      return сумма;
    }

    public void setСумма(Float сумма) {
      this.сумма = сумма;
    }


}