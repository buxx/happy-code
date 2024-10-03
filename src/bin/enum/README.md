# Enum

Considering here enum with fields (not simple list of values).

|   | Native | Exhaustive check | Type check |
|---|---|---|---|
| Rust | ✅ | ✅ | ✅ |
| Python | ❎ | 🔵 | ✅ |
| TypeScript | 🔵 | 🔵 | ❌ |

Categories legend: 

* Native: Included in language
* Exhaustive check: Exhaustive coverage is checked by analyzer
* Type check: Specifics types (for each enum variants) checked by analyzer

Symbol legend:

* ✅: Yes
* ❎: Possible, with hijack
* 🔵: Possible with additional tool
* ❌: No
