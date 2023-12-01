package INV2.model;

import org.eclipse.persistence.annotations.Convert;
import org.eclipse.persistence.annotations.Converter;
import INV2.utils.UUIDConverter;

import javax.persistence.*;
import java.util.UUID;


/**
 * Entity implementation class for Entity: Клиен
 */
@Entity(name = "IISINV2Клиен")
@Table(schema = "public", name = "Клиен")
public class Klien {

    @Id
    @Converter(converterClass = UUIDConverter.class, name = "primarykey")
    @Convert("primarykey")
    @Column(name = "primarykey", length = 16, unique = true, nullable = false)
    private UUID primarykey;

    @Column(name = "Наим")
    private String наим;

    @Column(name = "РасСчет")
    private Integer рассчет;

    @Column(name = "БИК")
    private Integer бик;

    @Column(name = "Банк")
    private String банк;

    @Column(name = "ИНН")
    private Integer инн;

    @Column(name = "КПП")
    private Integer кпп;


    public Klien() {
        super();
    }

    public void setPrimarykey(UUID primarykey) {
        this.primarykey = primarykey;
    }

    public UUID getPrimarykey() {
        return primarykey;
    }

    public String getНаим() {
      return наим;
    }

    public void setНаим(String наим) {
      this.наим = наим;
    }

    public Integer getРасСчет() {
      return рассчет;
    }

    public void setРасСчет(Integer рассчет) {
      this.рассчет = рассчет;
    }

    public Integer getБИК() {
      return бик;
    }

    public void setБИК(Integer бик) {
      this.бик = бик;
    }

    public String getБанк() {
      return банк;
    }

    public void setБанк(String банк) {
      this.банк = банк;
    }

    public Integer getИНН() {
      return инн;
    }

    public void setИНН(Integer инн) {
      this.инн = инн;
    }

    public Integer getКПП() {
      return кпп;
    }

    public void setКПП(Integer кпп) {
      this.кпп = кпп;
    }


}