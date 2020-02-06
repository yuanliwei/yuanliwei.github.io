import Fileds2JavaDbXutils from "./Fileds2JavaDbXutils";
import SQL2Java from "./SQL2Java";

class SQL2JavaDbXutils extends Fileds2JavaDbXutils {
    toJava(sqlStr, opts) {
        let filedStr = SQL2Java.parseSql2FiledsStr(sqlStr, opts);
        return super.toJava(filedStr, opts);
    }
}

export default SQL2JavaDbXutils