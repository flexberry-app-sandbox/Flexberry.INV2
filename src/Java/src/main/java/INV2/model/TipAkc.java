package INV2.model;

import org.eclipse.persistence.annotations.Convert;
import org.eclipse.persistence.annotations.Converter;
import INV2.utils.UUIDConverter;

import javax.persistence.*;
import java.util.UUID;


/**
 * Entity implementation class for Entity: ТипАкц
 */
@Entity(name = "IISINV2ТипАкц")
@Table(schema = "public", name = "ТипАкц")
public class TipAkc {

    @Id
    @Converter(converterClass = UUIDConverter.class, name = "primarykey")
    @Convert("primarykey")
    @Column(name = "primarykey", length = 16, unique = true, nullable = false)
    private UUID primarykey;

    @Column(name = "ТипАкции")
    private String типакции;


    public TipAkc() {
        super();
    }

    public void setPrimarykey(UUID primarykey) {
        this.primarykey = primarykey;
    }

    public UUID getPrimarykey() {
        return primarykey;
    }

    public String getТипАкции() {
      return типакции;
    }

    public void setТипАкции(String типакции) {
      this.типакции = типакции;
    }


}