/**
 * Created by Elizabeth on 1/7/2017.
 */
exports.mainPage = function(req, res) {
    res.render('mainPage', {
        pageTitle: 'Build a toy',
        ShowOrderButton:false
    });
};

exports.stylePage = function(req, res) {
    res.render('stylePage', {
        pageTitle: 'Гардеробна',
        ShowOrderButton:true
    });
};

exports.orderPage = function(req, res) {
    res.render('orderPage', {
        pageTitle: 'Замовлення',
        ShowOrderButton:true
    });
};
