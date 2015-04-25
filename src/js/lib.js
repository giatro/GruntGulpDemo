(function () {
	var verifica = function(n,m) {
		return !(isNaN(n*1) || isNaN(m*1))
	}
	var operazioni = {
		somma: function(n,m) {
			if(!verifica(n,m)) {
				return NaN;
			}
			return n + m;
		},
		sottrai: function(n,m) {
			return this.somma(n,-1*m);
		},
		moltiplica: function(n,m) {
			if(!verifica(n,m)) {
				return NaN;
			}
			return n*m;
		},
		dividi: function(n,m) {
			return this.moltiplica(n,1/m);
		}
	}
	window.operazioni = operazioni;
})()