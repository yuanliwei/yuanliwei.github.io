import Fileds2JavaDbOrmlite from "./Fileds2JavaDbOrmlite"
import SQL2Java from "./SQL2Java"

class SQL2JavaDbOrmlite extends Fileds2JavaDbOrmlite {

    toJava(sqlStr, opts) {
        var filedStr = SQL2Java.parseSql2FiledsStr(sqlStr, opts)
        return super.toJava(filedStr, opts)
    }

}

export default SQL2JavaDbOrmlite