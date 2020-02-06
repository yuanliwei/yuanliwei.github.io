import Fileds2JavaDbXutils3 from "./Fileds2JavaDbXutils3";
import SQL2Java from "./SQL2Java";

class SQLJavaDbXutils3 extends Fileds2JavaDbXutils3 {
    toJava(sqlStr, opts) {
        let filedStr = SQL2Java.parseSql2FiledsStr(sqlStr, opts);
        return super.toJava(filedStr, opts);
    }
}

export default SQLJavaDbXutils3