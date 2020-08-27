# Create a file

## C\#

``` C#
using (FileStream fs = File.Create(path))
{
    byte[] info = new UTF8Encoding(true).GetBytes("Extract knowledge and insights from data.");
    fs.Write(info, 0, info.Length);
}
```
## Javascript/nodejs
``` javascript
var fileSystem = require('fs');
var fileContent = "Extract knowledge and insights from data.";

// The absolute path of the new file with its name
var filepath = "path";

fs.writeFile(filepath, fileContent, (err) => {
    if (err) throw err;

    console.log("The file was succesfully saved!");
}); 
```
## Python
``` python
f= open("bigdata.txt","w+")

for i in range(10):
    f.write("Extract knowledge and insights from data %d\r\n" % (i+1))

f.close() 
```

## Java

``` Java
List<String> lines = Arrays.asList("Extract knowledge and insights from data.", "");
Path file = Paths.get("bigdata.txt");
Files.write(file, lines, StandardCharsets.UTF_8);
```


## Powershell

``` powershell
New-Item -Path 'bigdata.txt' -ItemType File

```
``` powershell
"Extract knowledge and insights from data." > bigdata.txt

```
## Bash/Shell
``` bash
"Extract knowledge and insights from data." > bigdata.txt
```

