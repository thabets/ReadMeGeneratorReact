import React from "react";



function License(license) {
  if (license == "MIT") {
    return "(https://opensource.org/licenses/MIT)";
  } else if (license == "IBM") {
    return "(https://opensource.org/licenses/IPL-1.0)";
  } else if (license == "ISC") {
    return "(https://opensource.org/licenses/ISC)";
  } else if (license == "Mozilla") {
    return "(https://opensource.org/licenses/MPL-2.0)";
  } else if (license == "Apache 2.0") {
    return "(https://opensource.org/licenses/Apache-2.0)";
  } else if (license == "Boost") {
    return "(https://www.boost.org/LICENSE_1_0.txt)";
  } else if (license == "BSD") {
    return "(https://opensource.org/licenses/BSD-3-Clause)";
  } else {
    return "None";
  }
}

export default License