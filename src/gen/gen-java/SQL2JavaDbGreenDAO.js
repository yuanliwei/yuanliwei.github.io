import SQL2Java from "./SQL2Java";
import Fileds2JavaDbGreenDAO from "./Fileds2JavaDbGreenDAO";

class SQL2JavaDbGreenDAO extends Fileds2JavaDbGreenDAO {
    toJava(sqlStr, opts) {
        let filedStr = SQL2Java.parseSql2FiledsStr(sqlStr, opts);
        return super.toJava(filedStr, opts);
    }
}

export default SQL2JavaDbGreenDAO