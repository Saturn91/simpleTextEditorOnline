# simpleTextEditorOnline

## Content
- [Purpose](#purpose-tag)
- [How to Use](#usage-tag)
- [Planned Features](#plannedFeatures)

Access latest release here: https://saturn91.github.io/simpleTextEditorOnline/

<div align="center">
  <img src="https://raw.githubusercontent.com/Saturn91/simpleTextEditorOnline/master/documentation/usage.png" alt="application usage"/>
</div>

## <a name="purpose-tag">Purpose</a>

I just god feed up with some big Company's Text-Editor office app. The way text and formats break when you add elements in the wrong location is mind blowing... 
The Goal of this application is to reduce the often times bloated interface and possibilities you have with your commen Text Editor. 

In this first implementation it is already capable of generating a single Page A4 Letter such as shown bellow:
<div align="center">
  <img src="https://raw.githubusercontent.com/Saturn91/simpleTextEditorOnline/master/documentation/example.png" alt="generated A4 Letter as PDF" width="500px"/>
</div>

## <a name="usage-tag">How to use</a>
The whole application is based on the fact that you can represent different paragraphs (and Titles) as a Rectangle which you can freely place on the page. Please note that the preview on the right site is only used to select (see section Select/Edit an existing Paragraph). Editing is done in the left hand side menu.

### Adding a new Paragraph

1. Click on the "Add Rectangle" Button in the top left
1. A rectangle with some text will be generated in the editor
1. In the menu on the left you can edit all available properties of this specific rectangle

### Position and resize a Paragraph

1. In the left side Menu: change the Properties x and y for position changes
1. In the left side Menu: change the Properties width (% of printable area width) and height (mm) for resizing

### Select/Edit an existing Paragraph

1. Hover your mouse over an already positioned Paragraph (it will show an outline on hover)
2. Click on the paragraph which is highlited
3. The Menu on the left side will now show the properties of the newly selected Paragraph

### Insert an Image
In this applictaion an image is a paragraph with no text, in which a background image is set. Do insert an Image follow these steps.

1. Create a Paragraph or select an existing one as you would do for a text
2. In the menu on the left you find a browse button (next to "no File selected") and a set Image Button
3. Select an image you would like to place. 
4. Click the set Image Button
5. Resize the rectangle until it fits your needs
6. delete the text which was auto generated by the application (i.e. rect-0) So only the image is shown if it is not needed.

### Export, Save and Print

As this Application is "just" a simple HTML/JS/CSS Page there is no Backend which would you allow to store your files online. But I implemented some other possibilities to store your Data for reusage, sharing and saving.

### Print / Export as PDF

Once you finished your Document, select the pages menu and click on Print. The Application will automatically select the preview Section and prints it on your default printer. Optional 
most Browser allow you to select "Print as PDF" in your printer selection. (Certainly works in Firefox and Google Chrome).

### Save your work so you can reuse it or proceed Work another day

- In the File-Menu you have an Option "Browser save", Edit the "new File" field and press the button. This will save a copy of your Data within the local storage of your Browser (i.e. Firefox, Chrome or Edge) if you reopen the Browser 
next Time you open that Browser (on the same machine!), if you click on the "no file selected" Field, a Dropdown should open containing your choosen Filename. Select it an press load, proceed work. The List on the bottom of the File Menu shows you all the Files stored in your browser.

- If you would like to store your data somewhere else (i.e. some cloud storage or localy in a file) you can press the button "Download document as a file". This will trigger a download of you document as a text file (json formated). To import it again, click the "Browse" button on top of the File menu, select your file on your local Machine. Finaly hit the button import which will load the data back in to the application and display it.

## <a name="plannedFeatures">Planned Features</a>
- multiple pages support
- some menu improvements
- mobile support?
