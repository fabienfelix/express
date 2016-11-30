:: Clear la console
cls

:: Enlever l'affichage standard
@echo off

echo "*** Lancement des specs avec Protractor ***"

protractor ../test/e2e/protractor.conf.js

pause

