Na przykładzie obiektowego języka programowania przedstaw strukturę klas
służących do obsługi GUI. Opisz technikę sterowania kierowanego zdarzeniami.

---

# GUI – graficzny interfejs użytkownika 

Standardowe pakiety java.awt (AWT) oraz javax.swing (Swing) zawierają
klasy definiujące wiele różnorodnych komponentów wizualnej interakcji programu z
użytkownikiem (okna, przyciski, listy itp.). Są one reprezentowane przez klasy
wywodzące się z klasy java.awt.Component.

Komponenty są umieszczane w kontenerach – specjalnych komponentach umożliwiających przechowywanie innych elementów GUI (komponentów oraz innych kontenerów) 


## AWT (Abstract Windowing Toolkit)
Zestaw klas definiujących proste komponenty interakcji wizualnej. Są to komponenty ciężkie – realizowane poprzez użycie graficznych bibliotek GUI systemu operacyjnego:
* ubogie możliwości graficzne i interakcyjne,
* brak komponentów zaawansowanych (np. tabel)
* zależny od platformy systemowej wygląd komponentów, 

## Pakiet Swing (JFC – Java Foundation Clases)
Zestaw klas definiujących wiele komponentów i kontenerów interakcji wizualnej o zaawansowanych właściwościach. Są to w większości komponenty lekkie, które:
* są rysowane za pomocą kodu Javy w obszarze jakiegoś komponentu ciężkiego
(zwykle kontenera najwyższego poziomu)
* moją wygląd niezależny od platformy systemowej,
* mogą być przezroczyste, a zatem mogą przybierać wizualnie dowolne kształty

## Komponenty i kontenery 
Elementy GUI dzielą się na komponenty (kontrolki, sterowniki) oraz kontenery,
które są używane do przechowywania innych elementów. 

### Komponenty
* przyciski (Button, JButton)
* płótna (Canvas)
* pola wyboru (Checkbox, JCheckbox)
* etykiety (Label, JLabel)
* paski przewijania (ScrollBar, JScrollBar)
* listy (List, JList)
* listy rozwjane (Choice)
* polecenia menu (MenuItem, JMenuItem)
* komponenty tekstowe (TextField, TextArea, JTextField, JTextArea) 

### Kontenery
* kontenery (Container)
* okna (Window, JWindow)
* ramki (Frame, JFrame)
* okna dialogowe (Dialog, JDialog)
* dialogi plikowe (FileDialog, JFileChooser)
* panele (Panel, JPanel)
* okna przewijalne (ScrollPane, JScrollPane) 

## Właściwości komponentów AWT i Swing 

Wszystkie komponenty wywodzą się z abstrakcyjnej klasy Component,
która definiuje m.in. metody ustalające właściwości komponentów:
* getNNN() – pobieranie właściwości komponentu
* isNNN() – sprawdzanie właściwości zerojedynkowych lub boolean
* setNNN(...) – ustalanie właściwości komponentu gdzie NNN jest nazwą właściwości.

Ważniejsze wspólne właściwości komponentów:
* is.../setVisible – sprawdza/ustawia widoczność komponentu,
* is.../setEnabled – sprawdza/ustawia dostępność komponentu,
* get.../setName – podaje/ustawia nazwę komponentu,
* get.../setFont – podaje/ustawia czcionkę,
* get.../setCursor – podaje/ustawia kursor dla komponentu,
* getParent – podaje kontener zawierający komponent,
* get.../setLocation – podaje/ustawia położenie górnego-lewego rogu,
* get.../setSize – podaje/ustawia rozmiar w pikselach,
* contains – sprawdza czy podany punkt zawiera się w polu komponentu.

## Kontenery
Kontenery to komponenty, które mogą zawierać inne komponenty (w tym inne
kontenery. Podstawowe metody (oprócz odziedziczonych z klasy Component) to:
* add(nazwa komponentu) – dodawanie komponentu,
* remove(nazwa komponentu) – usunięcie komponentu,
A ponadto:
* getCopmonentCount() – zwraca liczbę komponentów,
* getComponent(int n) – zwraca odniesienie na n-ty komponent,
* getComponents() – zwraca tablicę wszystkich komponentów,
* setLayout(...) – ustawia rozmieszczenie komponentów.

## Okna
Okna to kontenery najwyższego poziomu, za pomocą których aplikacja komunikuje
się z użytkownikiem.
* Najważniejsze komponenty, które tworzą okna to: JFrame, JDialog, JWindow, JApplet, JInternalFrame.
* Główne okno aplikacji jest obiektem klasy JFrame, np: JFrame okno = JFrame (”Okno główne”);
* Każde okno, mimo że samo jest kontenerem, zawiera kontenery wewnętrzne. Do manipulowania komponentami w oknie służy kontener contentPane. Dostęp
do tego kontenera umożliwia metoda getContentPane(), np: Container cp = okno.getContentPane();
* Kolejne komponenty umieszcza się w kontenerze przy użyciu metody add(...).

## Rozmieszczanie komponentów w kontenerze 
Z każdym kontenerem jest skojarzony tzw. zarządca rozkładu, który określa
rozmiary i położenie komponentów. Zarządca rozkładu jest obiektem klasy
implementującej interfejs LayoutManager. Ustalenie zarządcy rozkładu dla kontenera
odbywa się za pomocą metody setLayout(...) np.:
````
FlowLayout flow = new FlowLayot();
Frame f = new Frme();
f.setLayout(flow);
````
Użycie zarządcy rozkładu pozwala unikać konieczności oprogramowania zmian
rozmiarów i położenia komponentów przy zmianie rozmiarów kontenera. 

## Zdarzenia
Graficzny interfejs użytkownika oprócz samego wyświetlania komponentów powinien
reagować na zdarzenia pochodzące od użytkownika. Źródłami i słuchaczami zdarzeń są
obiekty:
* zdarzenie (event) - obiekt "niosący" informację o stanie źródła,
* źródło (source) - obiekt, który generuje zdarzenia,
* słuchacz (listener) -obiekt powiadamiany o wystąpieniu zdarzenia.
Większość zdarzeń jest generowana przez:
* mysz,
* klawiaturę,
* elementy interfejsu graficznego.
Obsługa zdarzeń jest zawarta w pakiecie java.awt.event. 

## Słuchacz
Klasa, która może obsługiwać zdarzenie. Każda klasa, która
implementuje interfejs nasłuchu staje się Słuchaczem, np.:
````
public class MojaKlasa implements ActionListener {
// ...
}
````
Każda klasa implementująca interfejs musi zdefiniować metody interfejsu.
Dla interfejsu ActionListener jest to:
````
public void actionPerformed(ActionEvent e) {
// instrukcje obsługujące zdarzenie
}
````
Klasa-słuchacz może też implementować większą liczbę interfejsów nasłuchu
(określamy w ten sposób zestaw obsługiwanych zdarzeń). 
````
import java.awt.BorderLayout;
import java.awt.event.ActionEvent;
import java.awt.event.ActionListener;
import javax.swing.JButton;
import javax.swing.JFrame;
import javax.swing.JTextArea;
 
public class SimpleSwingExample {
 
	public static void main(String[] args) {
		JFrame frame = new JFrame("Frame Title");
		final JTextArea comp = new JTextArea();
		JButton btn = new JButton("click");
		frame.getContentPane().add(comp, BorderLayout.CENTER);
		frame.getContentPane().add(btn, BorderLayout.SOUTH);
 
		btn.addActionListener(new ActionListener() {
			public void actionPerformed(ActionEvent ae) {
				comp.setText("Button has been clicked");
			}
		});
 
		int width = 300;
		int height = 300;
		frame.setSize(width, height);
 
		frame.setVisible(true);
	}
}
````
