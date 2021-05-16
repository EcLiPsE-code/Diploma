package by.gstu.itp.standprod.model;

import org.hibernate.annotations.GenericGenerator;

import javax.persistence.*;
import java.util.Objects;

@Entity
@Table(name = "datatests")
public class DataTest {

    @Id
    @GeneratedValue(generator = "system-uuid")
    @GenericGenerator(name = "system-uuid", strategy = "uuid2")
    @Column(name = "Id", nullable = false)
    private String id;
    @Column(name = "TypeTest", nullable = false)
    private String typeTest;
    @Column(name = "Size", nullable = false)
    private String size;
    @Column(name = "Number", nullable = false)
    private double number;
    @Column(name = "Rdin", nullable = false)
    private String rDin;

    public String getId(){return id;}
    public void setId(String id){this.id = id;}
    public String getTypeTest(){return typeTest;}
    public void setTypeTest(String typeTest){this.typeTest = typeTest;}
    public String getSize(){return size;}
    public void setSize(String size){this.size = size;}
    public double getNumber(){return number;}
    public void setNumber(double number){this.number = number;}
    public String getrDin(){return rDin;}
    public void setrDin(String rDin){this.rDin = rDin;}

    @Override
    public boolean equals(Object o) {
        if (this == o) return true;
        if (o == null || getClass() != o.getClass()) return false;
        DataTest dataTest = (DataTest) o;
        return Double.compare(dataTest.number, number) == 0 && Objects.equals(id, dataTest.id) && Objects.equals(typeTest, dataTest.typeTest) && Objects.equals(size, dataTest.size) && Objects.equals(rDin, dataTest.rDin);
    }

    @Override
    public int hashCode() {
        return Objects.hash(id, typeTest, size, number, rDin);
    }
}
