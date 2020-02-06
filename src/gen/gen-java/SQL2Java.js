import Fileds2Java from "./Fileds2Java";

function parseSql2FiledsStr(sqlStr, opts) {
    var className, i, key, keyStr, len, ref, reg, regBrackets, regKey, regName, regNote, regType, resultArr, sqlS, strFile, strFiles, strKeyName, strName, strNote, strType, strTypeValue, value;
    reg = /CREATE +TABLE +([`|\S]+) +\(/i;
    className = (ref = sqlStr.match(reg)) != null ? ref[1] : void 0;
    reg = /`(\S+)`/;
    if (reg.test(className)) {
        opts.className = className.match(reg)[1];
    } else {
        if (className != null) {
            opts.className = className;
        }
    }
    sqlStr.split(',').join('\n');
    sqlS = sqlStr.split('\n');
    reg = /([`|\S]+) +(COMMENT +'(.*?)' ?,)/i;
    regName = /`\S+`/i;
    regType = /\S+\(/i;
    regNote = /'\S+'/i;
    regKey = /PRIMARY KEY/i;
    regBrackets = /\(/i;
    strFiles = {};
    strKeyName = '';
    for (key = i = 0, len = sqlS.length; i < len; key = ++i) {
        value = sqlS[key];
        if (value.match(reg)) {
            strName = value.match(regName);
            strName = strName[0].substring(1, strName[0].length - 1);
            value = value.replace(/^\s+/g, "");
            strTypeValue = value.split(' ');
            strType = strTypeValue[1];
            if (strType.match(regBrackets)) {
                strType = strType.match(regType);
                strType = strType[0].substring(0, strType[0].length - 1);
            }
            strNote = value.match(regNote);
            strNote = strNote[0].substring(1, strNote[0].length - 1);
            switch (strType) {
                case "varchar":
                case "char":
                case "nchar":
                case "nvarchar":
                case "longtext":
                case "text":
                case "ntext":
                case "sql_variant":
                case "uniqueidentifier":
                    strType = "String";
                    break;
                case "smallint":
                case "int":
                case "tinyint":
                    strType = "int";
                    break;
                case 'bit':
                    strType = "boolean";
                    break;
                case 'bigint':
                case "datetime":
                    strType = "long";
                    break;
                case 'float':
                case "real":
                    strType = "float";
                    break;
                case 'double':
                    strType = "double";
            }
            strFile = "private " + strType + " " + strName + ";//" + strNote + "\n";
            strFiles[strName] = strFile;
        } else if (value.match(regKey)) {
            strKeyName = value.match(regName);
            strKeyName = strKeyName[0].substring(1, strKeyName[0].length - 1);
        }
    }
    keyStr = strFiles[strKeyName];
    delete strFiles[strKeyName];
    resultArr = [];
    resultArr.push(keyStr);
    for (key in strFiles) {
        value = strFiles[key];
        resultArr.push(value);
    }
    return resultArr.join('\n');
}

class SQL2Java extends Fileds2Java {
    toJava(sqlStr, opts) {
        let filedStr = parseSql2FiledsStr(sqlStr, opts);
        return super.toJava(filedStr, opts);
    }

    static parseSql2FiledsStr(sqlStr, opts) {
        return parseSql2FiledsStr(sqlStr, opts)
    }
}

export default SQL2Java