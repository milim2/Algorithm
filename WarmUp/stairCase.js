function staircase(n) {
    for (let i = 1; i <= n; i++) {
        console.log(" ".repeat(Math.abs(i - n)) + "#".repeat(i));
    }

}

     #
    ##
   ###
  ####
 #####
######
