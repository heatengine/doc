## FIND ALL node_modules UNDER pwd
### FOR LINUX AND MAC
```
$ cd documents 
$ find . -name "node_modules" -type d -prune | xargs du -chs
```

### FOR WINDOWS
```
$ cd documents 
$ FOR /d /r . %d in (node_modules) DO @IF EXIST "%d" echo %d"
```

## DELETE node_modules UNDER pwd
### FOR LINUX OR MAC
```
$ cd documents 
$ find . -name "node_modules" -type d -prune -exec rm -rf '{}' +
```

### FOR WINDOWS
```
$ cd documents 
$ FOR /d /r . %d in (node_modules) DO @IF EXIST "%d" rm -rf "%d"
```
