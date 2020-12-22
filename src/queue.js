import 'dotenv/config';
import Queue from './api/lib/Queue';
import RegistrationMail from './api/jobs/RegistrationMail';

Queue.process(RegistrationMail.handle); 