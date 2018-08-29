CREATE DATABASE IF NOT EXISTS patient_feedback2;
use patient_feedback2;

CREATE TABLE IF NOT EXISTS `surveyEncounter` (
 `surveyEncounterId` int(11) unsigned NOT NULL AUTO_INCREMENT,
 `surveyId` int(11) NOT NULL,
 `location` text NOT NULL,
 `date` date NOT NULL,
 `department` text NOT NULL,
 `clinicalProgramId` int(11) NOT NULL,
 PRIMARY KEY (`surveyEncounterId`)
) ENGINE=InnoDB AUTO_INCREMENT=124 DEFAULT CHARSET=utf8;
CREATE TABLE IF NOT EXISTS `surveyResponse` (
 `surveyResponseId` int(11) unsigned NOT NULL AUTO_INCREMENT,
 `surveyEncounter_surveyEncounterId` int(11) unsigned NOT NULL,
 `question` text NOT NULL,
 `answer` text NOT NULL,
 PRIMARY KEY (`surveyResponseId`),
 KEY `surveyEncounter_surveyResponse` (`surveyEncounter_surveyEncounterId`),
 CONSTRAINT `surveyEncounter_surveyResponse` FOREIGN KEY (`surveyEncounter_surveyEncounterId`) REFERENCES `surveyEncounter` (`surveyEncounterId`) ON UPDATE CASCADE
) ENGINE=InnoDB AUTO_INCREMENT=125 DEFAULT CHARSET=utf8;

