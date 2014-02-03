function(s1,s2){
	//var s1="abab",s2="baba";//分别存储原string与目标string
	var dp = [[]];
	
	for (var i = Math.max(s1.length,s2.length)+1;i-->0; ){
		( dp[i]||(dp[i]=[]))[0] = i;
		dp[0][i] = i;
	}
	for (i=1; i<=s1.length; i++){
		for (j=1; j<=s2.length; j++){
			if (s1.charAt(i-1)==s2.charAt(j-1)){
				dp[i][j]=dp[i-1][j-1];//不需操作
			}else{
				dp[i][j]=Math.min(dp[i][j-1]+1,dp[i-1][j]+1,dp[i-1][j-1]+1);
			}
		}
	}
	return dp[s1.length][s2.length];
}