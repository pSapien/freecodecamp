/**
  Design a cash register drawer function checkCashRegister() that accepts purchase price as the first argument (price), payment as the second argument (cash), and cash-in-drawer (cid) as the third argument.

  cid is a 2D array listing available currency.

  The checkCashRegister() function should always return an object with a status key and a change key.

  Return {status: "INSUFFICIENT_FUNDS", change: []} if cash-in-drawer is less than the change due, or if you cannot return the exact change.

  Return {status: "CLOSED", change: [...]} with cash-in-drawer as the value for the key change if it is equal to the change due.

  Otherwise, return {status: "OPEN", change: [...]}, with the change due in coins and bills, sorted in highest to lowest order, as the value of the change key.
 */

const REGISTER_STATUSES = { closed: 'CLOSED', insufficentFunds: 'INSUFFICIENT_FUNDS', open: 'OPEN' };
const fixDec = money => Number(money.toFixed(2));

function checkCashRegister(price, cash, cashInDrawer) {
  const cashRegister = { status: REGISTER_STATUSES.insufficentFunds, change: [] };
  const neededChange = fixDec(cash - price);
  const availableChange = fixDec(
    cashInDrawer.reduce((acc, [_, amount]) => acc + amount, 0)
  );

  if (neededChange === availableChange) {
    cashRegister.status = REGISTER_STATUSES.closed;
    cashRegister.change = cashInDrawer;
  }

  if (availableChange > neededChange){
    const [neededChangeLeft, returnChanges] = getReturnChanges(neededChange, cashInDrawer);
    if (neededChangeLeft === 0) { 
      cashRegister.status = REGISTER_STATUSES.open;
      cashRegister.change = returnChanges;
    }
  }

  return cashRegister;
}

const STANDARD_CHANGES = new Map([
  ["PENNY", 0.01],
  ["NICKEL", 0.05],
  ["DIME", 0.1],
  ["QUARTER", 0.25],
  ["ONE", 1],
  ["FIVE", 5],
  ["TEN", 10],
  ["TWENTY", 20],
  ["ONE HUNDRED", 100]
]);

function getReturnChanges(changeNeeded, cashInDrawer) {
  const changes = [];

  for (let [drawerUnit, drawerAmount] of cashInDrawer.reverse()) {
    const standardAmount = STANDARD_CHANGES.get(drawerUnit);

    if (changeNeeded >= standardAmount) {
      let unitChanges = 0;
  
      while (true) {
        const changedAdded = fixDec(changeNeeded - standardAmount);

        if (standardAmount > drawerAmount || changedAdded < 0) break;

        unitChanges = fixDec(unitChanges + standardAmount);
        drawerAmount = fixDec(drawerAmount - standardAmount);
        changeNeeded = fixDec(changeNeeded - standardAmount);
      }

      changes.push([ drawerUnit, unitChanges ]);
    }
  }

  return [changeNeeded, changes];
}

// console.log(
//   checkCashRegister(19.5, 20, [["PENNY", 1.01], ["NICKEL", 2.05], ["DIME", 3.1], ["QUARTER", 4.25], ["ONE", 90], ["FIVE", 55], ["TEN", 20], ["TWENTY", 60], ["ONE HUNDRED", 100]])
// );
console.log(
  checkCashRegister(
    19.5, 20, [["PENNY", 1.01], ["NICKEL", 2.05], ["DIME", 3.1], ["QUARTER", 4.25], ["ONE", 90], ["FIVE", 55],["TEN", 20], ["TWENTY", 60], ["ONE HUNDRED", 100]]
  )
);

console.log(
checkCashRegister(19.5, 20, [["PENNY", 0.01], ["NICKEL", 0], ["DIME", 0], ["QUARTER", 0], ["ONE", 1], ["FIVE", 0], ["TEN", 0], ["TWENTY", 0], ["ONE HUNDRED", 0]])
)


// console.log(
//   checkCashRegister(3.26, 100, [["PENNY", 1.01], ["NICKEL", 2.05], ["DIME", 3.1], ["QUARTER", 4.25], ["ONE", 90], ["FIVE", 55], ["TEN", 20], ["TWENTY", 60], ["ONE HUNDRED", 100]])
// );


/**
  {status: "OPEN", 
    change: [["TWENTY", 60], ["TEN", 20], ["FIVE", 15], ["ONE", 1], ["QUARTER", 0.5], ["DIME", 0.2], ["PENNY", 0.04]]
  }
 */